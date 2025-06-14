import { PatientModel } from "../../model/patient-model";

export interface IPatientRepository {
  create(patient: PatientModel): Promise<PatientModel>;
}
