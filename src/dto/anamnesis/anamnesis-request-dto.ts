export interface AnamnesisRequestDto {
  patientId: string;

  patientName: string;
  age: number;
  schoolYear: string;

  reasonForReferral?: string;
  developmentalHistory?: string;
  schoolHistory?: string;
  familyHistory?: string;
  healthHistory?: string;
}
