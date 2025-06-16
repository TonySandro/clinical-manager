import { AnamnesisRequestDto } from "../../dto/anamnesis/anamnesis-request-dto";
import { AnamnesisModel } from "../../model/anamnesis-model";
import { PatientModel } from "../../model/patient-model";

export interface IAnamnesisRepository {
  create(data: AnamnesisRequestDto): Promise<AnamnesisModel>;
  findById(id: string): Promise<AnamnesisModel | null>;
  delete(id: string): Promise<void>;
}
