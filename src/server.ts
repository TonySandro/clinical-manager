import "reflect-metadata";
import "./infra/dependency-injector";
import express from "express";
import cors from "cors";
import { container } from "tsyringe";
import { PatientRouter } from "./infra/routes/patient-router";

const app = express();

app.use(cors());
app.use(express.json());

const patientRouter = container.resolve(PatientRouter);

app.use("/patients", patientRouter.router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
