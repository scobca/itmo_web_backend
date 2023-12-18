import { Body, Controller, Get, HttpCode, Inject, Post } from "@nestjs/common";
import { CordsProvider } from "../providers/cords.provider";
import { CordsDto } from "../dto/cords.dto";

@Controller("/cords")
export class CordsController {
  constructor(@Inject(CordsProvider) private cordsProvider: CordsProvider) {}

  @Get("/getAll")
  @HttpCode(200)
  async getAllCords(@Body() data: { user_id: number }) {
    return await this.cordsProvider.getAllCords(data);
  }

  @Post("/add")
  @HttpCode(200)
  async addCords(@Body() data: CordsDto) {
    return await this.cordsProvider.addCords(data);
  }
}
