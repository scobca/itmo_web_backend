import { Injectable } from "@nestjs/common";
import { AuthModel } from "../models/auth.model";
import { UserDto } from "../dto/user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthProvider {
  constructor(private jwtService: JwtService) {}

  public async createUser(data: UserDto): Promise<AuthModel> {
    return await AuthModel.findOne({
      where: {
        login: data.login,
      },
    }).then(async (res: any) => {
      if (res != null) {
        return res;
      } else {
        const payload: any = {
          sub: data.login,
        };

        const token: string = await this.jwtService.signAsync(payload);

        return AuthModel.create({
          login: data.login,
          password: data.password,
          token: token,
        });
      }
    });
  }
}
