import { inject, injectable } from "tsyringe";
import { PatientModel } from "../model/patient-model";
import { IPatientRepository } from "../repositories/contracts/ipatient-repository";
import { IPatientService } from "./contracts/ipatient-service";
import { PatientRepository } from "../repositories/patient-repository";

@injectable()
export class PatientService implements IPatientService {
  constructor(
    @inject(PatientRepository)
    private readonly patientRepository: IPatientRepository
  ) {}

  public async createPatient(patient: PatientModel): Promise<PatientModel> {
    try {
      return await this.patientRepository.add(patient);
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      throw new Error("Erro interno ao criar paciente");
    }
  }
}
