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
const createOrder = async (
  id: any,
  orderData: object
): Promise<object | null> => {
  const result = await userModel.updateOne(id, { $push: orderData });
  return result;
};
const getOrder = async (
  id: string
): Promise<
  [{ productName: string; price: number; quantity: number }] | null | undefined
> => {
  const result = await userModel.findById(id);
  return result?.order;
};
const getTotalPrice = async (id: string): Promise<number | null> => {
  const result = await userModel.findById(id);
  const totalPrice = (result?.order || []).reduce(
    (accumulator, element) => accumulator + element.quantity * element.price,
    0
  );
  return totalPrice;
};
export const userService = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  createOrder,
  getTotalPrice,
  getOrder,
};
