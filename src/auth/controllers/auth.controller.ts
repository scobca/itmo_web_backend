import { Body, Controller, Inject, Post } from "@nestjs/common";
import { AuthProvider } from "../providers/auth.provider";
import { UserDto } from "../dto/user.dto";

@Controller("")
export class AuthController {
  constructor(@Inject(AuthProvider) private authProvider: AuthProvider) {}

  @Post("/create")
  async createUser(@Body() data: UserDto) {
    return await this.authProvider.createUser(data);
    // return data;
  }
}
