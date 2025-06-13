import { Request, Response } from "express";

export interface IPatientController {
  create(req: Request, res: Response): Promise<void>;
}
