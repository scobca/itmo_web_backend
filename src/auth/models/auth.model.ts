import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  Unique,
} from "sequelize-typescript";

@Table
export class AuthModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @Column
  login: string;

  @Column
  password: string;

  @Column
  token: string;
}
