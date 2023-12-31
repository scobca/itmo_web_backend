import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./providers/app.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { dbConf } from "../../conf/db.conf";
import { AuthModule } from "../auth/auth.module";
import { CordsModule } from "../cords/cords.module";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      ...dbConf,
    }),
    AuthModule,
    CordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
