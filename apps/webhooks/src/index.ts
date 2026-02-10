import express from "express";
import { prismaClient } from "@repo/db";
const app = express();
app.use(express.json());

const PORT = 4000;

/**
 * Automatically extract human-readable fields from a Helius enhanced payload.
 * This means users can just use {fromWallet}, {toWallet}, {solAmount}, {signature}
 * in their email/telegram templates — no manual filling needed.
 */
function flattenHeliusMeta(body: any): Record<string, string> {
  // Helius sends an array of transactions
  const payload = Array.isArray(body) ? body[0] : body;

  if (!payload) return body;

  // If it's not a Helius payload (no signature field), store as-is
  if (!payload.signature) {
    // Regular webhook — flatten top-level keys
    const flat: Record<string, string> = {};
    for (const [key, value] of Object.entries(payload)) {
      flat[key] = String(value);
    }
    return flat;
  }

  // ── It's a Helius enhanced transaction ──────────────────────────────
  const nativeTransfer = payload.nativeTransfers?.[0];
  const tokenTransfer = payload.tokenTransfers?.[0];

  const fromWallet =
    nativeTransfer?.fromUserAccount ??
    tokenTransfer?.fromUserAccount ??
    "unknown";

  const toWallet =
    nativeTransfer?.toUserAccount ?? tokenTransfer?.toUserAccount ?? "unknown";

  // Native transfers are in lamports (1 SOL = 1,000,000,000 lamports)
  const lamports = nativeTransfer?.amount ?? 0;
  const solAmount = (lamports / 1_000_000_000).toFixed(4);

  // Token transfer amount (already in token units from Helius)
  const tokenAmount = tokenTransfer?.tokenAmount ?? "0";
  const tokenMint = tokenTransfer?.mint ?? "";

  // Account balance changes
  const balanceChange = payload.accountData?.[0]?.nativeBalanceChange ?? 0;
  const balanceChangeSol = (Math.abs(balanceChange) / 1_000_000_000).toFixed(4);

  return {
    // Core fields — users just write {fromWallet}, {solAmount}, etc.
    signature: payload.signature ?? "",
    type: payload.type ?? "UNKNOWN",
    timestamp: payload.timestamp
      ? new Date(payload.timestamp * 1000).toISOString()
      : "",
    fromWallet,
    toWallet,
    solAmount,
    lamports: String(lamports),
    tokenAmount: String(tokenAmount),
    tokenMint,
    balanceChangeSol,
    // Keep source marker for the worker
    source: "helius",
    // Stringify the full raw payload in case someone needs it
    rawPayload: JSON.stringify(payload),
  };
}

app.post("/hooks/catch/:userId/:workflow", async (req, res) => {
  const userId = req.params.userId;
  const workflowId = req.params.workflow;
  const body = req.body;

  // Auto-flatten the Helius payload into clean template variables
  const meta = flattenHeliusMeta(body);

  await prismaClient.$transaction(async (tx: any) => {
    const run = await tx.workFlowRun.create({
      data: {
        workflowId: workflowId,
        meta: meta,
      },
    });

    await tx.workFlowOutBox.create({
      data: {
        WorkFlowRunId: run.id,
      },
    });
  });

  res.json({
    success: true,
    message: "Webhook received and processed",
    extractedData: {
      fromWallet: meta.fromWallet,
      toWallet: meta.toWallet,
      solAmount: meta.solAmount,
      signature: meta.signature,
    },
  });
});

app.listen(PORT, () => {
  console.log(` Hooks are running on PORT ${PORT} `);
});
