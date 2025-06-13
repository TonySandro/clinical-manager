import { Repository } from "typeorm";
import { Database } from "../infra/db-connection";
import { inject, injectable } from "tsyringe";
import { PatientModel } from "../model/patient-model";
import { IPatientRepository } from "./contracts/ipatient-repository";

@injectable()
export class PatientRepository implements IPatientRepository {
  private ormRepo: Repository<PatientModel>;

  constructor(@inject(Database) private readonly database: Database) {
    this.ormRepo = this.database.getDataSource().getRepository(PatientModel);
  }

  async add(patient: PatientModel): Promise<PatientModel> {
    const newPatient = this.ormRepo.create(patient);
    return await this.ormRepo.save(newPatient);
  }
}
