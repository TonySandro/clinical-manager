import { DataSource } from "typeorm";
import { singleton } from "tsyringe";
import { AppDataSource } from "./typeorm-config";

@singleton()
export class Database {
  private readonly dataSource: DataSource;

  constructor() {
    this.dataSource = AppDataSource;
  }

  public async connect(): Promise<void> {
    if (this.dataSource.isInitialized) {
      console.log("[Database] Already connected");
      return;
    }

    try {
      await this.dataSource.initialize();
      console.log("[Database] Connection established successfully");
    } catch (error) {
      console.error("[Database] Connection failed:", error);
      throw error;
    }
  }

  public getDataSource(): DataSource {
    if (!this.dataSource.isInitialized) {
      throw new Error("[Database] DataSource is not initialized");
    }
    return this.dataSource;
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource.isInitialized) {
      await this.dataSource.destroy();
      console.log("[Database] Connection closed");
    } else {
      console.log("[Database] No active connection to close");
    }
  }
}
