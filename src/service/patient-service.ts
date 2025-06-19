import { inject, injectable } from "tsyringe";
import { PatientModel } from "../model/patient-model";
import { IPatientRepository } from "../repositories/contracts/i-patient-repository";
import { IPatientService } from "./contracts/i-patient-service";
import { PatientRepository } from "../repositories/patient-repository";
import { PatientRequestDto } from "../dto/patient/patient-request-dto";

@injectable()
export class PatientService implements IPatientService {
  constructor(
    @inject(PatientRepository)
    private readonly patientRepository: IPatientRepository
  ) {}

  public async create(patient: PatientRequestDto): Promise<PatientModel> {
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

  async findAll(): Promise<PatientModel[]> {
    try {
      return await this.patientRepository.findAll();
    } catch (error) {
      console.error("Erro ao buscar todos os pacientes:", error);
      throw new Error("Erro interno ao buscar pacientes");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.patientRepository.delete(id);
    } catch (error) {
      console.error("Erro ao deletar paciente:", error);
      throw new Error("Erro interno ao deletar paciente");
    }
  }

  async update(
    id: string,
    patient: PatientModel
  ): Promise<PatientModel | null> {
    try {
      return await this.patientRepository.update(id, patient);
    } catch (error) {
      console.error("Erro ao atualizar paciente:", error);
      throw new Error("Erro interno ao atualizar paciente");
    }
  }
}
