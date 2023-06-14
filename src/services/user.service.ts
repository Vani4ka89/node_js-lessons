import { User } from "../models/User.model";
import { IUser } from "../types/user.type";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return await User.find();
  }

  public async create(user: IUser): Promise<IUser> {
    return await User.create(user);
  }

  public async findById(id: string): Promise<IUser> {
    return await User.findById(id);
  }

  public async updateById(id: string, user: IUser): Promise<IUser> {
    return await User.findOneAndUpdate({ _id: id }, user, {
      returnDocument: "after",
    });
  }

  public async deleteById(id: string): Promise<void> {
    await User.deleteOne({ _id: id });
  }

  public async findOneByIdOrThrow(id: string) {}
}

export const userService = new UserService();
