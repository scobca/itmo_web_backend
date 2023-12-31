import { Injectable } from "@nestjs/common";
import { AuthModel } from "../models/auth.model";
import { UserDto } from "../dto/user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthProvider {
  constructor(private jwtService: JwtService) {}

  public async findUser(data: { token: string }): Promise<AuthModel> {
    const res: any = await AuthModel.findOne({
      where: {
        token: data.token,
      },
    });

    return res.id;
  }

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

  public async loginUser(data: UserDto): Promise<AuthModel> {
    return await AuthModel.findOne({
      where: {
        login: data.login,
        password: data.password,
      },
    }).then((res: any) => {
      if (res) {
        return res.token;
      } else {
        throw new Error("User not defined.");
      }
    });
  }
}
