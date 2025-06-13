import { PatientModel } from "../../model/patient-model";

export interface IPatientService {
  createPatient(patient: PatientModel): Promise<PatientModel>;
}
