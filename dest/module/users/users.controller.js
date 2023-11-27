"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_service_1 = require("./users.service");
const users_validation_joy_1 = __importDefault(require("./users.validation.joy"));
//create users
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { users: userData } = req.body;
        const { error, value } = users_validation_joy_1.default.validate(userData);
        if (value) {
            const result = yield users_service_1.userService.createUser(value);
            res.status(201).json({
                success: true,
                massage: "User created successfully!",
                data: result,
            });
        }
        else {
            res.status(500).json({
                success: false,
                massage: "somthing went wrong",
                data: error,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//get Users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield users_service_1.userService.getAllUser();
        res.status(200).json({
            success: true,
            massage: "Users fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//get single users
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        console.log({ singleuserId: id });
        const result = yield users_service_1.userService.getSingleUser(id);
        res.status(200).json({
            success: true,
            massage: "User fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//Update users
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const user = req.body;
        const result = yield users_service_1.userService.updateUser(id, user);
        res.status(200).json({
            success: true,
            massage: "User updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const result = yield users_service_1.userService.deleteUser(id);
        res.status(200).json({
            success: true,
            massage: "User deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//Create orders
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const order = req.body;
        const result = yield users_service_1.userService.createOrder(id, order);
        res.status(200).json({
            success: true,
            massage: "Order created successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//Get oreders
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        console.log(id);
        const result = yield users_service_1.userService.getOrder(id);
        res.status(200).json({
            success: true,
            massage: "Order fetched successfully!",
            data: {
                orders: result,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "somthing went wrong",
            data: error,
        });
    }
});
//Get Total Price
const getTotalPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.userId;
        const result = yield users_service_1.userService.getTotalPrice(id);
        res.status(200).json({
            success: true,
            massage: "Total price calculated successfully!",
            data: {
                totalPrice: result,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: "User not found",
            data: {
                code: 404,
                description: "User not found!",
            },
        });
    }
});
exports.userController = {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createOrder,
    getTotalPrice,
    getOrder,
};
