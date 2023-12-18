import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModel } from "./models/auth.model";
import { AuthController } from "./controllers/auth.controller";
import { AuthProvider } from "./providers/auth.provider";
import { JwtModule } from "@nestjs/jwt";
import { JwtOptionsModule } from "./providers/jwt.options.module";

@Module({
  imports: [
    SequelizeModule.forFeature([AuthModel]),
    JwtModule.registerAsync({
      useClass: JwtOptionsModule,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthProvider],
})
export class AuthModule {}
