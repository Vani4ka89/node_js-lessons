import { ApiError } from "../errors";
import { User } from "../models/User.model";
import { IUser } from "../types/user.type";

class UserService {
  public async findAll(): Promise<IUser[]> {
    return await User.find();
  }

  public async create(user: IUser): Promise<IUser> {
    return await User.create(user);
  }

  public async findById(userId: string): Promise<IUser> {
    await this.getOneByIdOrThrow(userId);
    return await User.findById(userId);
  }

  public async updateById(userId: string, user: IUser): Promise<IUser> {
    await this.getOneByIdOrThrow(userId);
    return await User.findOneAndUpdate({ _id: userId }, user, {
      returnDocument: "after",
    });
  }

  public async deleteById(userId: string): Promise<void> {
    await this.getOneByIdOrThrow(userId);
    await User.deleteOne({ _id: userId });
  }

  private async getOneByIdOrThrow(userId: string): Promise<IUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError("User not found", 422);
    }
    return user;
  }
}

export const userService = new UserService();
