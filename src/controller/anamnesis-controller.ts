import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import { AnamnesisRequestDto } from "../dto/anamnesis/anamnesis-request-dto";
import { IAnamnesisService } from "../service/contracts/i-anamnesis-service";
import { AnamnesisModel } from "../model/anamnesis-model";

@injectable()
export class AnamnesisController {
  constructor(
    @inject("AnamnesisService") private anamnesisService: IAnamnesisService
  ) {}
  async create(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body as AnamnesisModel;

      await this.anamnesisService.create(data);
      res.status(201).json({ message: "Anamnese criada com sucesso" });
    } catch (error) {
      console.error("Erro no controller ao criar anamnese:", error);
      res.status(500).json({ message: "Erro ao criar anamnese" });
      return;
    }
  }
}
