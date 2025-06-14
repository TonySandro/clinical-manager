import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IPatientController } from "./contracts/i-patient-controller";
import { PatientModel } from "../model/patient-model";
import { IPatientService } from "../service/contracts/i-patient-service";

@injectable()
export class PatientController implements IPatientController {
  constructor(
    @inject("PatientService") private patientService: IPatientService
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const patient = req.body as PatientModel;
      await this.patientService.create(patient);

      res.status(201).json({ message: "Paciente criado com sucesso" });
    } catch (error) {
      console.error("Erro no controller ao criar paciente:", error);
      res.status(500).json({ message: "Erro ao criar paciente" });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const result = await this.patientService.findById(id);

      if (!result)
        return res.status(404).json({ message: "Paciente não encontrado" });

      return res.status(200).json(result);
    } catch (error) {
      console.error("Erro no controller ao buscar paciente por ID:", error);
      return res.status(500).json({ message: "Erro ao buscar paciente" });
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const patients = await this.patientService.findAll();
      return res.status(200).json(patients);
    } catch (error) {
      console.error("Erro no controller ao buscar todos os pacientes:", error);
      return res.status(500).json({ message: "Erro ao buscar pacientes" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.patientService.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error("Erro no controller ao deletar paciente:", error);
      return res.status(500).json({ message: "Erro ao deletar paciente" });
    }
  }
}
