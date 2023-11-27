import { TUser } from "./users.interface";
import { userModel } from "./users.model";

const createUser = async (userData: TUser) => {
  // const result = await userModel.create(userData);
  const user = new userModel(userData);
  const result = user.save();
  return result;
};

const getAllUser = async (): Promise<TUser[]> => {
  const result = await userModel.find();
  return result;
};
const getSingleUser = async (id: string): Promise<TUser | null> => {
  const result = await userModel.findById(id);
  return result;
};
const updateUser = async (
  id: string,
  userData: TUser
): Promise<TUser | null> => {
  const result = await userModel.findByIdAndUpdate(id, userData);
  return result;
};

const deleteUser = async (id: string): Promise<TUser | null> => {
  const result = await userModel.findByIdAndDelete(id);
  return result;
};
export const userService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
