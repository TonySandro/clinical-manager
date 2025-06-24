import "reflect-metadata";
import "./infra/dependency-injector";
import express from "express";
import cors from "cors";
import { container } from "tsyringe";
import { PatientRouter } from "./infra/routes/patient-router";
import { AppDataSource } from "./infra/typeorm-config";
import { AnamnesisRouter } from "./infra/routes/anamnesis-router";
import { StatisticsRouter } from "./infra/routes/statistics-router";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    const patientRouter = container.resolve(PatientRouter);
    const anamnesisRouter = container.resolve(AnamnesisRouter);
    const statisticsRouter = container.resolve(StatisticsRouter);

    app.use("/api", anamnesisRouter.router);
    app.use("/api", patientRouter.router);
    app.use("/api", statisticsRouter.router);

    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`server running at PORT:${PORT}`));
  })
  .catch(console.error);
