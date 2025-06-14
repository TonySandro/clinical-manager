import { inject, injectable } from "tsyringe";
import { PatientModel } from "../model/patient-model";
import { IPatientRepository } from "../repositories/contracts/i-patient-repository";
import { IPatientService } from "./contracts/i-patient-service";
import { PatientRepository } from "../repositories/patient-repository";

@injectable()
export class PatientService implements IPatientService {
  constructor(
    @inject(PatientRepository)
    private readonly patientRepository: IPatientRepository
  ) {}

  public async create(patient: PatientModel): Promise<PatientModel> {
    try {
      return await this.patientRepository.create(patient);
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      throw new Error("Erro interno ao criar paciente");
    }
  }

  public async findById(id: string): Promise<PatientModel | null> {
    try {
      return await this.patientRepository.findById(id);
    } catch (error) {
      console.error("Erro ao buscar paciente por ID:", error);
      throw new Error("Erro interno ao buscar paciente");
    }
  }
}
