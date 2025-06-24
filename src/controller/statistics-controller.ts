import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IStatisticsService } from "../service/contracts/i-statistics-service";
import { IStatisticsController } from "./contracts/i-statistics-controller";

@injectable()
export class StatisticsController implements IStatisticsController {
  constructor(
    @inject("StatisticsService") private statisticsService: IStatisticsService
  ) {}

  async getUserStatistics(req: Request, res: Response): Promise<Response> {
    try {
      const userId = "user-id-fake";
      const statistics = await this.statisticsService.getUserStatistics(userId);

      return res.status(200).json(statistics);
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
      return res
        .status(500)
        .json({ message: "Erro interno ao buscar estatísticas" });
    }
  }
}
