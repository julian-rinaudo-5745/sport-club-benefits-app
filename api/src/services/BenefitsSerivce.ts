import { inject, injectable } from "inversify";
import { BenefitRepositoryInterface } from "../repositories/BenefitsRepositoryInterface";
import { TYPES } from "../types";

@injectable()
export class BenefitsService {
  private _repository: BenefitRepositoryInterface;

  constructor(
    @inject(TYPES.BenefitRepositoryInterface)
    repository: BenefitRepositoryInterface
  ) {
    this._repository = repository;
  }
  public getAll() {
    return this._repository.getAll();
  }
  public getById() {
    return this._repository.getById();
  }
}
