import { Request, Response } from "express";
import { userService } from "./users.service";
import userValidationSchema from "./users.validation.joy";

const createUser = async (req: Request, res: Response) => {
  try {
    const { users: userData } = req.body;
    const { error, value } = userValidationSchema.validate(userData);
    if (value) {
      const result = await userService.createUser(value);
      res.status(200).json({
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

export const userContriller = {
  createUser,
};
