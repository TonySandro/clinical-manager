export interface PatientRequestDto {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
}
