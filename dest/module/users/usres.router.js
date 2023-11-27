"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const router = express_1.default.Router();
router.post("/api/users", users_controller_1.userController.createUser);
router.get("/api/users", users_controller_1.userController.getUsers);
router.get("/api/users/:userId", users_controller_1.userController.getSingleUser);
router.patch("/api/users/:userId", users_controller_1.userController.updateUser);
router.delete("/api/users/:userId", users_controller_1.userController.deleteUser);
router.put("/api/users/:userId/orders", users_controller_1.userController.createOrder);
router.get("/api/users/:userId/orders", users_controller_1.userController.getOrder);
router.get("/api/users/:userId/orders/total-price", users_controller_1.userController.getTotalPrice);
exports.userRouter = router;
