import { AnamnesisRequestDto } from "../../dto/anamnesis/anamnesis-request-dto";
import { AnamnesisModel } from "../../model/anamnesis-model";

export interface IAnamnesisRepository {
  create(data: AnamnesisRequestDto): Promise<AnamnesisModel>;
  findById(id: string): Promise<AnamnesisModel | null>;
}
