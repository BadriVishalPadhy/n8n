import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().max(20).min(4),
  email: z.string().email("Invalid Email"),
  password: z.string().min(8),
});

export const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const nodeCreateSchema = z.object({
  availableTriggerId: z.string(),
  triggerMeta: z.any().optional(),
  actions: z.array(
    z.object({
      availableActionId: z.string(),
      actionMeta: z.any().optional(),
    }),
  ),
});
