import { inject, injectable } from "tsyringe";
import { AnamnesisRequestDto } from "../dto/anamnesis/anamnesis-request-dto";
import { IAnamnesisRepository } from "../repositories/contracts/i-anamnesis-repository";
import { IAnamnesisService } from "./contracts/i-anamnesis-service";
import { AnamnesisModel } from "../model/anamnesis-model";
import { AnamnesisRepository } from "../repositories/anamnesis-repository";
import { PatientRepository } from "../repositories/patient-repository";
import { IPatientRepository } from "../repositories/contracts/i-patient-repository";
import { PatientModel } from "../model/patient-model";

@injectable()
export class AnamnesisService implements IAnamnesisService {
  constructor(
    @inject(AnamnesisRepository) private repository: IAnamnesisRepository,
    @inject(PatientRepository) private patientRepository: IPatientRepository
  ) {}

  async create(data: AnamnesisRequestDto): Promise<AnamnesisModel> {
    const patient: PatientModel | null = await this.patientRepository.findById(
      data.patientId
    );

    if (!patient) {
      throw new Error("Paciente não encontrado com o ID informado.");
    }

    const anamnesis = this.repository.createEntityWithPatient(data, patient);
    return await this.repository.create(anamnesis);
  }

  async findById(id: string): Promise<AnamnesisModel | null> {
    return await this.repository.findById(id);
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      console.error("Erro no service ao deletar anamnese:", error);
      throw new Error("Erro interno ao deletar anamnese");
    }
  }
}
