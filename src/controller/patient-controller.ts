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
}
