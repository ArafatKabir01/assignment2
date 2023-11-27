import express from "express";
import { userController } from "./users.controller";

const router = express.Router();

router.post("/api/users", userController.createUser);
router.get("/api/users", userController.getUsers);
router.get("/api/users/:id", userController.getSingleUser);
router.patch("/api/users/:id", userController.updateUser);
router.delete("/api/users/:id", userController.deleteUser);

export const userRouter = router;
