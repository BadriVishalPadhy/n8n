import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes";
import nodeRouter from "./routes/node.routes";

const PORT = 6000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRouter);
app.use("/api/v1", nodeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
