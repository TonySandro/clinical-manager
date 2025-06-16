import { Repository } from "typeorm";
import { Database } from "../infra/db-connection";
import { inject, injectable } from "tsyringe";
import { IAnamnesisRepository } from "./contracts/i-anamnesis-repository";
import { AnamnesisModel } from "../model/anamnesis-model";
import { AnamnesisRequestDto } from "../dto/anamnesis/anamnesis-request-dto";
import { PatientModel } from "../model/patient-model";

@injectable()
export class AnamnesisRepository implements IAnamnesisRepository {
  private ormRepo: Repository<AnamnesisModel>;

  constructor(@inject(Database) private readonly database: Database) {
    this.ormRepo = this.database.getDataSource().getRepository(AnamnesisModel);
  }

  async create(anamnesis: AnamnesisRequestDto): Promise<AnamnesisModel> {
    const newAnamnesis = this.ormRepo.create(anamnesis);
    return await this.ormRepo.save(newAnamnesis);
  }

  async findById(id: string): Promise<AnamnesisModel | null> {
    return await this.ormRepo.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }
}
