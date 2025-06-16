import { AnamnesisRequestDto } from "../../dto/anamnesis/anamnesis-request-dto";
import { AnamnesisModel } from "../../model/anamnesis-model";

export interface IAnamnesisService {
  create(anamnesis: AnamnesisRequestDto): Promise<AnamnesisModel>;
  findById(id: string): Promise<AnamnesisModel | null>;
  update(id: string, data: AnamnesisRequestDto): Promise<AnamnesisModel | null>;
  delete(id: string): Promise<void>;
}
