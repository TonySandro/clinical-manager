import { Request, Response } from "express";

export interface IAnamnesisController {
  create(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
}
