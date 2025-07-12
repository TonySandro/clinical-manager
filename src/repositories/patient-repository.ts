import { Repository, Between } from "typeorm";
import { Database } from "../infra/db-connection";
import { inject, injectable } from "tsyringe";
import { PatientModel } from "../model/patient-model";
import { IPatientRepository } from "./contracts/i-patient-repository";
import { PatientRequestDto } from "../dto/patient/patient-request-dto";
import { startOfMonth, endOfMonth } from "date-fns";

@injectable()
export class PatientRepository implements IPatientRepository {
  private ormRepo: Repository<PatientModel>;

  constructor(@inject(Database) private readonly database: Database) {
    this.ormRepo = this.database.getDataSource().getRepository(PatientModel);
  }

  async create(patient: PatientRequestDto): Promise<PatientModel> {
    const newPatient = this.ormRepo.create(patient);
    return await this.ormRepo.save(newPatient);
  }

  async findById(id: string): Promise<PatientModel | null> {
    return await this.ormRepo.findOne({
      where: { id },
      relations: ["anamnesis"],
    });
  }

  async findAll(accountId: string): Promise<PatientModel[]> {
    return await this.ormRepo.find({
      where: { accountId },
    });
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }

  async update(
    id: string,
    patient: Partial<PatientModel>
  ): Promise<PatientModel | null> {
    const existingPatient = await this.ormRepo.findOne({ where: { id } });
    if (!existingPatient) {
      return null;
    }

    const updatedPatient = Object.assign(existingPatient, patient);
    return await this.ormRepo.save(updatedPatient);
  }

  async countTotalPatients(userId: string): Promise<number> {
    return await this.ormRepo.count({
      where: {
        // Filtro por userId quando criar o relacionamento User → Patient
      },
    });
  }

  async countNewPatientsByMonth(userId: string, date: Date): Promise<number> {
    return await this.ormRepo.count({
      where: {
        createdAt: Between(startOfMonth(date), endOfMonth(date)),
        // Filtro por userId quando o campo existir
      },
    });
  }
}
