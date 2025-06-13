import "reflect-metadata";
import "./infra/dependency-injector";
import express from "express";
import cors from "cors";
import { container } from "tsyringe";
import { PatientRouter } from "./infra/routes/patient-router";
import { AppDataSource } from "./infra/typeorm-config";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    const patientRouter = container.resolve(PatientRouter);

    app.use("/api", patientRouter.router);

    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () =>
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch(console.error);
