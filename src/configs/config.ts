import { config } from "dotenv";

config();

export const configs = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_FORGOT_SECRET: process.env.JWT_FORGOT_SECRET,
  JWT_ACTIVATE_SECRET: process.env.JWT_ACTIVATE_SECRET,

  SECRET_SALT: process.env.SECRET_SALT,

  ACCESS_EXPIRE: process.env.ACCESS_EXPIRE,
  REFRESH_EXPIRE: process.env.REFRESH_EXPIRE,
  // FORGOT_EXPIRE: process.env.FORGOT_EXPIRE,
  // ACTIVATE_EXPIRE: process.env.ACTIVATE_EXPIRE,
  ACTION_TOKEN_EXPIRE: process.env.ACTION_TOKEN_EXPIRE,

  NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL,
  NO_REPLY_PASSWORD: process.env.NO_REPLY_PASSWORD,

  FRONT_URL: process.env.FRONT_URL,
};
