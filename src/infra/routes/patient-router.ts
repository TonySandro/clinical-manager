import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { IPatientController } from "../../controller/contracts/i-patient-controller";

@injectable()
export class PatientRouter {
  public router: Router;
  private patientController: IPatientController;

  constructor(
    @inject("PatientController")
    private readonly patient: IPatientController
  ) {
    this.router = Router();
    this.patientController = patient;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/patients", async (req, res, next) => {
      await this.patientController.create(req, res).catch(next);
    });

    this.router.get("/patients/:id", async (req, res, next) => {
      await this.patientController.getById(req, res).catch(next);
    });

    this.router.get("/all-patients", async (req, res, next) => {
      await this.patientController.findAll(req, res).catch(next);
    });

    this.router.delete("/patients/:id", async (req, res, next) => {
      await this.patientController.delete(req, res).catch(next);
    });

    this.router.patch("/patients/:id", async (req, res, next) => {
      await this.patientController.update(req, res).catch(next);
    });
  }
}
