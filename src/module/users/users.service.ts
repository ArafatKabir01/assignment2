import { TUser } from "./users.interface";
import { userModel } from "./users.model";

const createUser = async (userData: TUser) => {
  const user = new userModel(userData);
  const result = user.save();
  return result;
};

const getAllUser = async (): Promise<TUser[]> => {
  const result = await userModel.aggregate([
    {
      $project: {
        userId: 1,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        isActive: 1,
        hobbies: 1,
        address: 1,
        
      }
    }
  ]);
  return result;
};
const getSingleUser = async (id: string): Promise<TUser | null> => {
  const result = await userModel.findOne({ userId: id }).select({
    fullName: 1,
    address: 1,
    _id: 1,
    userId: 1,
    username: 1,
    age: 1,
    email: 1,
    isActive: 1,
    hobbies: 1,
    __v: 1,
  }).select('-order').select('-password');
  return result;
};

const updateUser = async (
  id: string,
  userData: TUser
): Promise<TUser | null> => {
  const result = await userModel.findOneAndUpdate({ userId: id }, userData).select({
    fullName: 1,
    address: 1,
    _id: 1,
    userId: 1,
    username: 1,
    age: 1,
    email: 1,
    isActive: 1,
    hobbies: 1,
    __v: 1,
  }).select('-order').select('-password');
  
  return result;
};

const deleteUser = async (id: string): Promise<TUser | null> => {
  const result = await userModel.findOneAndDelete({ userId: id });
  return result;
};
const createOrder = async (
  id: any,
  orderData: object
): Promise<object | null> => {
  const ordersData = {order:orderData}
  const result = await userModel.findOneAndUpdate(
    { userId: id },
    { $push: ordersData }
  );
  return result;
};
const getOrder = async (
  id: string
): Promise<
  [{ productName: string; price: number; quantity: number }] | null | undefined
> => {
  const result = await userModel.findOne({ userId: id });
  return result?.order;
};

const getTotalPrice = async (id: string): Promise<number | null> => {
  const result = await userModel.findOne({ userId: id });
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
