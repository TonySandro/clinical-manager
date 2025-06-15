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
      await this.anamnesisService.create(req.body);

      res.status(201).json({ message: "Anamnese criada com sucesso" });
    } catch (error) {
      console.error("Erro no controller ao criar anamnese:", error);
      res.status(500).json({ message: "Erro ao criar anamnese" });
      return;
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await this.anamnesisService.findById(id);

      if (!result)
        return res.status(404).json({ message: "Anamnese não encontrada" });

      return res.status(200).json(result);
    } catch (error) {
      console.error("Erro no controller ao buscar anamnese por ID:", error);
      return res.status(500).json({ message: "Erro ao buscar anamnese" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.anamnesisService.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Erro no controller ao deletar anamnese:", error);
      return res.status(500).json({ message: "Erro ao deletar anamnese" });
    }
  }
}
