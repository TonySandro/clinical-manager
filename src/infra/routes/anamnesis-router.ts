import { Router } from "express";
import { inject, injectable } from "tsyringe";
import { IAnamnesisController } from "../../controller/contracts/i-anamnesis-controller";

@injectable()
export class AnamnesisRouter {
  public router: Router;
  private anamnesisController: IAnamnesisController;

  constructor(
    @inject("AnamnesisController")
    private readonly anamnesis: IAnamnesisController
  ) {
    this.router = Router();
    this.anamnesisController = anamnesis;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/anamnesis", async (req, res, next) => {
      await this.anamnesisController.create(req, res).catch(next);
    });
  }
}
