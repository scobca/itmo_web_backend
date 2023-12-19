import { Body, Controller, Get, HttpCode, Inject, Post } from "@nestjs/common";
import { AuthProvider } from "../providers/auth.provider";
import { UserDto } from "../dto/user.dto";

@Controller("")
export class AuthController {
  constructor(@Inject(AuthProvider) private authProvider: AuthProvider) {}

  @Get("/find")
  @HttpCode(200)
  async findUserByToken(@Body() data: { token: string }) {
    return await this.authProvider.findUser(data);
  }

  @Post("/create")
  @HttpCode(200)
  async createUser(@Body() data: UserDto) {
    return await this.authProvider.createUser(data);
  }

  @Post("/login")
  @HttpCode(200)
  async loginUser(@Body() data: UserDto) {
    return await this.authProvider.loginUser(data);
  }
}
