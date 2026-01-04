import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes";
import nodeRouter from "./routes/node.routes";
import triggerRouter from "./routes/node.routes";
import actionRouter from "./routes/node.routes";
import cors from "cors"
const PORT = 3001;
const app = express()
app.use(cors({
  origin: 'http://localhost:3000', // your Next.js app URL
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", authRouter);
app.use("/api/v1/workflow", nodeRouter);
app.use("/api/v1/availableTrigger", triggerRouter);
app.use("/api/v1/availableAction", actionRouter);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
