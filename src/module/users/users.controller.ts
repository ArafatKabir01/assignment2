import { Request, Response } from "express";
import { userService } from "./users.service";
import userValidationSchema from "./users.validation.joy";

const createUser = async (req: Request, res: Response) => {
  try {
    const { users: userData } = req.body;
    const { error, value } = userValidationSchema.validate(userData);
    if (value) {
      const result = await userService.createUser(value);
      res.status(201).json({
        success: true,
        massage: "User created successfully!",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        massage: "somthing went wrong",
        data: error,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.status(200).json({
      success: true,
      massage: "Users fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    console.log({ singleuserId: id });
    const result = await userService.getSingleUser(id);
    res.status(200).json({
      success: true,
      massage: "User fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const user = req.body;
    const result = await userService.updateUser(id, user);
    res.status(200).json({
      success: true,
      massage: "User updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const createOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const order = req.body;
    const result = await userService.createOrder(id, order);
    res.status(200).json({
      success: true,
      massage: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    console.log(id);
    const result = await userService.getOrder(id);
    res.status(200).json({
      success: true,
      massage: "Order fetched successfully!",
      data: {
        orders: result,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userService.getTotalPrice(id);
    res.status(200).json({
      success: true,
      massage: "Total price calculated successfully!",
      data: {
        totalPrice: result,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "User not found",
      data: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userService.deleteUser(id);
    res.status(200).json({
      success: true,
      massage: "User deleted successfully!",
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};

export const userController = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  createOrder,
  getTotalPrice,
  getOrder,
};
