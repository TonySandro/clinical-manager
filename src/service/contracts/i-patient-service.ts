import { PatientModel } from "../../model/patient-model";

export interface IPatientService {
  create(patient: PatientModel): Promise<PatientModel>;
  findById(id: string): Promise<PatientModel | null>;
}
