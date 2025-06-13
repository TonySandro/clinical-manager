import { DataSourceOptions } from "typeorm";
import { env } from "process";
import { PatientModel } from "../model/patient-model";

export const AppDataSource: DataSourceOptions = {
  type: "mysql",
  host: env.MYSQLDB_HOST,
  port: Number(env.MYSQLDB_DOCKER_PORT),
  username: env.MYSQLDB_USER,
  password: env.MYSQLDB_ROOT_PASSWORD,
  database: env.MYSQLDB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [PatientModel],
};
