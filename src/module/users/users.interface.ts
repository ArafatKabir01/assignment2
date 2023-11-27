import { Model } from "mongoose";

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
};

export type UserMethods = {
  isUserExist(id: number): Promise<TUser>;
};

export type UserModel = Model<TUser, Record<string, never>, UserMethods>;
