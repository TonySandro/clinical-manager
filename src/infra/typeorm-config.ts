import { DataSource } from "typeorm";
import "dotenv/config";
import { PatientModel } from "../model/patient-model";
import { AnamnesisModel } from "../model/anamnesis-model";
import { AccountModel } from "../model/account-model";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [PatientModel, AnamnesisModel, AccountModel],
});
