import { CordsModel } from "../models/cords.model";
import { Injectable } from "@nestjs/common";
import { CordsDto } from "../dto/cords.dto";
import { ValidationModel } from "../models/validation.model";

@Injectable()
export class CordsProvider {
  constructor() {}

  public async getAllCords(data: { user_id: number }): Promise<CordsModel[]> {
    return await CordsModel.findAll({
      where: {
        userId: data.user_id,
      },
    });
  }

  public async addCords(data: CordsDto): Promise<CordsModel> {
    const validation = new ValidationModel();
    const hit = validation.checkCordsValid(data);
    const date = new Date().toLocaleString();

    return await CordsModel.create({
      x: data.x,
      y: data.y,
      r: data.r,
      userId: data.user_id,
      isHit: hit,
      date: date,
    });
  }
}
