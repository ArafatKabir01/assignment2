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
exports.userContriller = void 0;
const users_service_1 = require("./users.service");
const users_validation_joy_1 = __importDefault(require("./users.validation.joy"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { users: userData } = req.body;
        const { error, value } = users_validation_joy_1.default.validate(userData);
        if (value) {
            const result = yield users_service_1.userService.createUser(value);
            res.status(200).json({
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
exports.userContriller = {
    createUser,
};
