import { Router } from "express";
import { injectable } from "tsyringe";
import { AppDataSource } from "../typeorm-config";

@injectable()
export class HealthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/health", async (req, res, next) => {
      try {
        await AppDataSource.query("SELECT 1");

        res.status(200).json({
          status: "success",
          dependency: "database",
          timestamp: new Date(),
          uptime: process.uptime(),
        });
      } catch (error) {
        res.status(500).json({
          status: "error",
          database: "disconnected",
          error: error.message,
        });
      }
    });
  }
}
