import { PatientRequestDto } from "../../dto/patient/patient-request-dto";
import { PatientModel } from "../../model/patient-model";

export interface IPatientRepository {
  create(patient: PatientRequestDto): Promise<PatientModel>;
  findById(id: string): Promise<PatientModel | null>;
  findAll(accountId: string): Promise<PatientModel[]>;
  delete(id: string): Promise<void>;
  update(
    id: string,
    patient: Partial<PatientModel>
  ): Promise<PatientModel | null>;
  countTotalPatients(userId: string): Promise<number>;
  countNewPatientsByMonth(userId: string, date: Date): Promise<number>;
}
