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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const users_model_1 = require("./users.model");
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new users_model_1.userModel(userData);
    const result = user.save();
    return result;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.userModel.find();
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.userModel.findById(id);
    return result;
});
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.userModel.findByIdAndUpdate(id, userData);
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.userModel.findByIdAndDelete(id);
    return result;
});
const createOrder = (id, orderData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield users_model_1.userModel.findByIdAndUpdate({ _id: id }, { $push: orderData });
    return result;
});
const getOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.userModel.findById(id);
    return result === null || result === void 0 ? void 0 : result.order;
});
const getTotalPrice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.userModel.findById(id);
    const totalPrice = ((result === null || result === void 0 ? void 0 : result.order) || []).reduce((accumulator, element) => accumulator + element.quantity * element.price, 0);
    return totalPrice;
});
exports.userService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    createOrder,
    getTotalPrice,
    getOrder,
};
