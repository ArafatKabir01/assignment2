import express from "express";
import { userController } from "./users.controller";

const router = express.Router();

router.post("/api/users", userController.createUser);
router.get("/api/users", userController.getUsers);
router.get("/api/users/:userId", userController.getSingleUser);
router.patch("/api/users/:userId", userController.updateUser);
router.delete("/api/users/:userId", userController.deleteUser);
router.put("/api/users/:userId/orders", userController.createOrder);
router.get("/api/users/:userId/orders", userController.getOrder);
router.get(
  "/api/users/:userId/orders/total-price",
  userController.getTotalPrice
);

export const userRouter = router;
