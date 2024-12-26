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
  public async getAll() {
    return await this._repository.getAll();
  }
  public async getById(id: number) {
    return await this._repository.getById(id);
  }
}
