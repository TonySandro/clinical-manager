import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IPatientController } from "./contracts/ipatient-controller";
import { PatientModel } from "../model/patient-model";
import { IPatientService } from "../service/contracts/ipatient-service";

@injectable()
export class PatientController implements IPatientController {
  constructor(
    @inject("PatientService") private patientService: IPatientService
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const patient = req.body as PatientModel;
      await this.patientService.createPatient(patient);
    } catch (error) {
      console.error("Erro no controller ao criar paciente:", error);
    }
  }
}
