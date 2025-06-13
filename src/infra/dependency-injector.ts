import "reflect-metadata";
import { container } from "tsyringe";
import { Database } from "./db-connection";
import { IPatientRepository } from "../repositories/contracts/ipatient-repository";
import { PatientRepository } from "../repositories/patient-repository";
import { IPatientController } from "../controller/contracts/ipatient-controller";
import { PatientController } from "../controller/patient-controller";
import { IPatientService } from "../service/contracts/ipatient-service";
import { PatientService } from "../service/patient-service";
import { PatientRouter } from "./routes/patient-router";

container.register<Database>(Database, { useClass: Database });

container.register<IPatientRepository>("PatientRepository", {
  useClass: PatientRepository,
});

container.register<IPatientService>("PatientService", {
  useClass: PatientService,
});

container.register<IPatientController>("PatientController", {
  useClass: PatientController,
});

container.register(PatientRouter, { useClass: PatientRouter });
