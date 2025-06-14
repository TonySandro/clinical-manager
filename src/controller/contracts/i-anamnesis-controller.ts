import { Request, Response } from "express";

export interface IAnamnesisController {
  create(req: Request, res: Response): Promise<void>;
}
