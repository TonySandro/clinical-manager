import { inject, injectable } from "tsyringe";
import { AnamnesisRequestDto } from "../dto/anamnesis/anamnesis-request-dto";
import { IAnamnesisRepository } from "../repositories/contracts/i-anamnesis-repository";
import { IAnamnesisService } from "./contracts/i-anamnesis-service";
import { AnamnesisModel } from "../model/anamnesis-model";
import { AnamnesisRepository } from "../repositories/anamnesis-repository";

@injectable()
export class AnamnesisService implements IAnamnesisService {
  constructor(
    @inject(AnamnesisRepository) private repository: IAnamnesisRepository
  ) {}

  async create(data: AnamnesisRequestDto): Promise<AnamnesisModel> {
    return await this.repository.create(data);
  }

  async findById(id: string): Promise<AnamnesisModel | null> {
    return await this.repository.findById(id);
  }
}
