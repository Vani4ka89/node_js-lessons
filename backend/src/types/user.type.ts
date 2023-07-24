import { Document } from "mongoose";

export interface IUser extends Document {
  name?: string;
  age?: number;
  gender?: string;
  avatar?: string;
  email: string;
  password: string;
  phone: string;
}
