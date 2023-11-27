import cors from "cors";
import express, { Request, Response } from "express";
import { userRouter } from "./module/users/usres.router";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/POST", userRouter);
app.use("/GET", userRouter);
app.use("/", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
