import { Request, Response } from "express";

export interface IStatisticsController {
  getUserStatistics(req: Request, res: Response): Promise<Response>;
}
