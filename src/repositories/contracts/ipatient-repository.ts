import { PatientModel } from "../../model/patient-model";

export interface IPatientRepository {
  add(patient: PatientModel): Promise<PatientModel>;
}
