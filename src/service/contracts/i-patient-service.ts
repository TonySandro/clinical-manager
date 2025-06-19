import { PatientRequestDto } from "../../dto/patient/patient-request-dto";
import { PatientModel } from "../../model/patient-model";

export interface IPatientService {
  create(patient: PatientRequestDto): Promise<PatientModel>;
  findById(id: string): Promise<PatientModel | null>;
  findAll(): Promise<PatientModel[]>;
  delete(id: string): Promise<void>;
  update(id: string, patient: PatientModel): Promise<PatientModel | null>;
}
