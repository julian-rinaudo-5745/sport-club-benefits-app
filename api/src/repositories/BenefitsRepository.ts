import { BenefitRepositoryInterface } from "../repositories/BenefitsRepositoryInterface";

export class BenefitsRepository implements BenefitRepositoryInterface {
  public getAll() {
    return "get all";
  }
  public getById() {
    return "get by id";
  }
}
