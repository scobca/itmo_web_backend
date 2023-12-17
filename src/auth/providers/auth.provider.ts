import { Injectable } from "@nestjs/common";
import { AuthModel } from "../models/auth.model";
import { UserDto } from "../dto/user.dto";

@Injectable()
export class AuthProvider {
  public async createUser(data: UserDto): Promise<AuthModel> {
    return await AuthModel.findOrCreate({
      where: {
        login: data.login,
        password: data.password,
        token: data.token,
      },
    }).then((res: any) => {
      if (res != null) {
        return res;
      } else {
        return AuthModel.create({
          login: data.login,
          password: data.password,
          token: data.token,
        });
      }
    });
  }
}
