import bcrypt from "bcrypt";
import { Document, model, Query, Schema } from "mongoose";
import config from "../../config";
import { TUser, UserMethods, UserModel } from "./users.interface";
const usersSchema = new Schema<TUser, UserModel, UserMethods>({
  userId: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String, String],
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
});

usersSchema.pre(/^find/, function (this: Query<TUser, Document>, next) {
  this.find({ isActive: { $eq: true } });
  next();
});

usersSchema.pre("save", async function () {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycript_sult_round)
  );
});

export const userModel = model<TUser>("Users", usersSchema);
