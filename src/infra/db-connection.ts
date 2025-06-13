import { DataSource } from "typeorm";
import { singleton } from "tsyringe";
import { AppDataSource } from "./typeorm-config";

@singleton()
export class Database {
  private dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource(AppDataSource);
  }

  public async connect(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
      console.log("Database connected");
    }
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource.isInitialized) {
      await this.dataSource.destroy();
    }
  }
}
