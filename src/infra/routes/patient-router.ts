import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { IPatientController } from "../../controller/contracts/ipatient-controller";

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
    this.router.post("/", async (req, res, next) => {
      await this.patientController.create(req, res).catch(next);
    });
  }
}
