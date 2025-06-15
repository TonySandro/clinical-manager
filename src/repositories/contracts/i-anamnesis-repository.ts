import { AnamnesisRequestDto } from "../../dto/anamnesis/anamnesis-request-dto";
import { AnamnesisModel } from "../../model/anamnesis-model";
import { PatientModel } from "../../model/patient-model";

export interface IAnamnesisRepository {
  create(data: AnamnesisModel): Promise<AnamnesisModel>;
  findById(id: string): Promise<AnamnesisModel | null>;
  delete(id: string): Promise<void>;
  createEntityWithPatient(
    data: AnamnesisRequestDto,
    patient: PatientModel
  ): AnamnesisModel;
}
