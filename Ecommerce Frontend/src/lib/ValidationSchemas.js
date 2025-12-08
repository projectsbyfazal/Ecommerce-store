import Joi from "joi";

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(12)
    .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    .required(),
  confirm_password: Joi.ref("password"),
});

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().required(),
  stockQuantity: Joi.number().required(),
  category: Joi.object().required(),
  brand: Joi.object().required(),
  color: Joi.string().required(),
  material: Joi.string().required(),
});
