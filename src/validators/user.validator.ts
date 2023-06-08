import * as joi from "joi";
import Joi from "joi";

export class UserValidator {
  create = joi.object({
    name: Joi.string().min(3).max(30).trim(),
    age: Joi.number(),
    gender: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  });
}
