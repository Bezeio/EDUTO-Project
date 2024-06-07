import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  //register
  async register(email: string, password: string): Promise<User> {
    if (password.length < 8) {
      throw new Error("Mật khẩu phải có ít nhất 8 ký tự");
    }
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new Error("Email đã được sử dụng");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  }

  //login
  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return null;
    }
    return user;
  }
}
