import { Request, Response } from "express";

export interface IPatientController {
  create(req: Request, res: Response): Promise<void>;
  getById(req: Request, res: Response): Promise<Response>;
  findAll(req: Request, res: Response): Promise<Response>;
  delete(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
}
