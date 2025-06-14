import { Repository } from "typeorm";
import { Database } from "../infra/db-connection";
import { inject, injectable } from "tsyringe";
import { IAnamnesisRepository } from "./contracts/i-anamnesis-repository";
import { AnamnesisModel } from "../model/anamnesis-model";

@injectable()
export class AnamnesisRepository implements IAnamnesisRepository {
  private ormRepo: Repository<AnamnesisModel>;

  constructor(@inject(Database) private readonly database: Database) {
    this.ormRepo = this.database.getDataSource().getRepository(AnamnesisModel);
  }

  async create(anamnesis: AnamnesisModel): Promise<AnamnesisModel> {
    const newAnamnesis = this.ormRepo.create(anamnesis);
    return await this.ormRepo.save(newAnamnesis);
  }
}
