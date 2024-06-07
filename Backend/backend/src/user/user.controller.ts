import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { User } from "./schemas/user.schema";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("/login")
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<User> {
    try {
      const user = await this.userService.login(body.email, body.password);
      if (!user) {
        throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
      }
      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Post("/register")
  async register(
    @Body() body: { email: string; password: string },
  ): Promise<User> {
    try {
      const newUser = await this.userService.register(
        body.email,
        body.password,
      );
      return newUser;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
