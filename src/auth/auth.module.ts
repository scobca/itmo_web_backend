import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModel } from "./models/auth.model";
import { AuthController } from "./controllers/auth.controller";
import { AuthProvider } from "./providers/auth.provider";

@Module({
  imports: [SequelizeModule.forFeature([AuthModel])],
  controllers: [AuthController],
  providers: [AuthProvider],
})
export class AuthModule {}
