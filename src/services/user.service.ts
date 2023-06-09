import { User } from "../models/User.model";
import { IUser } from "../types/user.type";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return User.find().select("-password");
  }

  public async create(data: IUser): Promise<IUser> {
    return User.create(data);
  }

  public async findById(id: string): Promise<IUser> {
    return User.findById(id);
  }

  public async updateById(id: string, data: IUser): Promise<IUser> {
    return User.findOneAndUpdate({ _id: id }, data, {
      returnDocument: "after",
    });
  }

  public async deleteById(id: string): Promise<void> {
    User.deleteOne({ _id: id });
  }
}

export const userService = new UserService();
