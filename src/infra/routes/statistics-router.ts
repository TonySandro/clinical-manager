import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { IStatisticsController } from "../../controller/contracts/i-statistics-controller";

@injectable()
export class StatisticsRouter {
  public router: Router;
  private statisticsController: IStatisticsController;

  constructor(
    @inject("StatisticsController")
    private readonly statistics: IStatisticsController
  ) {
    this.router = Router();
    this.statisticsController = statistics;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/statistics", async (req, res, next) => {
      await this.statisticsController.getUserStatistics(req, res).catch(next);
    });
  }
}
