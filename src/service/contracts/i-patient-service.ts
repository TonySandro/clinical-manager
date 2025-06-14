import { PatientModel } from "../../model/patient-model";

export interface IPatientService {
  create(patient: PatientModel): Promise<PatientModel>;
}
