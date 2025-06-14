import { AnamnesisModel } from "../../model/anamnesis-model";

export interface IAnamnesisService {
  create(anamnesis: AnamnesisModel): Promise<AnamnesisModel>;
}
