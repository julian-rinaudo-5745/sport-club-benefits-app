import { inject, injectable } from "inversify";
import { plainToClass } from "class-transformer";
import { BenefitRepositoryInterface } from "../repositories/BenefitsRepositoryInterface";
import { TYPES } from "../types";
import { BenefitsDto } from "../dto/BenefitDTO";
import { BenefitDetailDto } from "../dto/BenefitDetailDTO";
import { logger } from "..";

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
    const benefits = await this._repository.getAll();

    return benefits.data?.body?.beneficios.map((benefit) => {
      return plainToClass(BenefitsDto, benefit, {
        excludeExtraneousValues: true,
      });
    });
  }
  public async getById(id: number) {
    const benefit = await this._repository.getById(id);

    return plainToClass(BenefitDetailDto, benefit.data.body, {
      excludeExtraneousValues: true,
    });
  }
}
