import { Container } from "inversify";
import { TYPES } from "./types";
import { BenefitsService } from "./services/BenefitsSerivce";
import { BenefitsController } from "./controllers/BenefitsController";
import { BenefitsRepository } from "./repositories/BenefitsRepository";

const myContainer = new Container();
myContainer.bind<BenefitsService>(TYPES.BenefitsService).to(BenefitsService);
myContainer
  .bind<BenefitsController>(TYPES.BenefitsController)
  .to(BenefitsController);
myContainer
  .bind<BenefitsRepository>(TYPES.BenefitRepositoryInterface)
  .to(BenefitsRepository);

export { myContainer };
