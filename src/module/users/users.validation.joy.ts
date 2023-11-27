import Joi from "joi";

const userValidationSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().default(true),
  hobbies: Joi.array().items(Joi.string()).length(2).required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
  order: Joi.array().items(
    Joi.object({
      productName: Joi.string(),
      price: Joi.number(),
      quantity: Joi.number(),
    })
  ),
});

export default userValidationSchema;
