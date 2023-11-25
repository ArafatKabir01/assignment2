import express from "express";
import { userContriller as userController } from "./users.controller";

const router = express.Router();

router.post("/api/users", userController.createUser);

export const userRouter = router;
