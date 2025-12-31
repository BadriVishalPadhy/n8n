import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "../src/routes/auth.routes";

const PORT = 6000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
