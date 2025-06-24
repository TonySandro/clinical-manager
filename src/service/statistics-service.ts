import { inject, injectable } from "tsyringe";
import { startOfMonth, endOfMonth } from "date-fns";
import { IStatisticsService } from "./contracts/i-statistics-service";
import { IPatientRepository } from "../repositories/contracts/i-patient-repository";

@injectable()
export class StatisticsService implements IStatisticsService {
  constructor(
    @inject("PatientRepository")
    private readonly patientRepository: IPatientRepository
  ) {}

  public async getUserStatistics(userId: string): Promise<any> {
    try {
      const now = new Date();

      const totalPatients = await this.patientRepository.countTotalPatients(
        userId
      );
      const newPatientsThisMonth =
        await this.patientRepository.countNewPatientsByMonth(userId, now);

      return {
        mainStatistics: {
          totalPatients,
          newPatientsThisMonth,
        },
      };
    } catch (error) {
      console.error("Erro ao gerar estatísticas:", error);
      throw new Error("Erro interno ao gerar estatísticas");
    }
  }
}
