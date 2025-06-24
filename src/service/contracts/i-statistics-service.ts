export interface IStatisticsService {
  getUserStatistics(userId: string): Promise<any>;
}
