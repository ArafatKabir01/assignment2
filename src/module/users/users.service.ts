import { User } from "./users.interface";
import { userModel } from "./users.model";

const createUser = async (userData: User) => {
  const result = await userModel.create(userData);
  return result;
};

export const userService = {
  createUser,
};
