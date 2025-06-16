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

    this.router.get("/anamnesis/:id", async (req, res, next) => {
      await this.anamnesisController.getById(req, res).catch(next);
    });

    this.router.delete("/anamnesis/:id", async (req, res, next) => {
      await this.anamnesisController.delete(req, res).catch(next);
    });
  }
}
