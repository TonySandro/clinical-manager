import { PatientModel } from "../../model/patient-model";

export interface IPatientRepository {
  create(patient: PatientModel): Promise<PatientModel>;
  findById(id: string): Promise<PatientModel | null>;
  findAll(): Promise<PatientModel[]>;
  delete(id: string): Promise<void>;
  update(
    id: string,
    patient: Partial<PatientModel>
  ): Promise<PatientModel | null>;
}
