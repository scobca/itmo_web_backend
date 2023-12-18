import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export class CordsModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  x: number;

  @Column
  y: number;

  @Column
  r: number;

  @Column
  userId: number;

  @Column
  isHit: boolean;

  @Column
  date: string;
}
