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
  } catch (error) {
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
      massage: "User Find successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await userService.getSingleUser(id);
    res.status(200).json({
      success: true,
      massage: "User Find successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const result = await userService.updateUser(id, user);
    res.status(200).json({
      success: true,
      massage: "update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "somthing went wrong",
      data: error,
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userService.deleteUser(id);
    res.status(200).json({
      success: true,
      massage: "delete successfully",
      data: {},
    });
  } catch (error) {
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
};
