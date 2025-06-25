import "reflect-metadata";
import { container } from "tsyringe";
import { Database } from "./db-connection";
import { IPatientRepository } from "../repositories/contracts/i-patient-repository";
import { PatientRepository } from "../repositories/patient-repository";
import { IPatientController } from "../controller/contracts/i-patient-controller";
import { PatientController } from "../controller/patient-controller";
import { IPatientService } from "../service/contracts/i-patient-service";
import { PatientService } from "../service/patient-service";
import { PatientRouter } from "./routes/patient-router";
import { IAnamnesisRepository } from "../repositories/contracts/i-anamnesis-repository";
import { AnamnesisRepository } from "../repositories/anamnesis-repository";
import { AnamnesisRouter } from "./routes/anamnesis-router";
import { AnamnesisController } from "../controller/anamnesis-controller";
import { IAnamnesisController } from "../controller/contracts/i-anamnesis-controller";
import { IAnamnesisService } from "../service/contracts/i-anamnesis-service";
import { AnamnesisService } from "../service/anamnesis-service";
import { StatisticsService } from "../service/statistics-service";
import { IStatisticsService } from "../service/contracts/i-statistics-service";
import { IStatisticsController } from "../controller/contracts/i-statistics-controller";
import { StatisticsController } from "../controller/statistics-controller";
import { StatisticsRouter } from "./routes/statistics-router";

container.register<Database>(Database, { useClass: Database });

container.register<IPatientRepository>("PatientRepository", {
  useClass: PatientRepository,
});
container.register<IAnamnesisRepository>("AnamnesisRepository", {
  useClass: AnamnesisRepository,
});

container.register<IPatientService>("PatientService", {
  useClass: PatientService,
});
container.register<IAnamnesisService>("AnamnesisService", {
  useClass: AnamnesisService,
});
container.register<IStatisticsService>("StatisticsService", {
  useClass: StatisticsService,
});

container.register<IPatientController>("PatientController", {
  useClass: PatientController,
});
container.register<IAnamnesisController>("AnamnesisController", {
  useClass: AnamnesisController,
});
container.register<IStatisticsController>("StatisticsController", {
  useClass: StatisticsController,
});

container.register(PatientRouter, { useClass: PatientRouter });
container.register(AnamnesisRouter, { useClass: AnamnesisRouter });
container.register(StatisticsRouter, { useClass: StatisticsRouter });
