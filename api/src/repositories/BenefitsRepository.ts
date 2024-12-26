import { BenefitRepositoryInterface } from "../repositories/BenefitsRepositoryInterface";
import axios from "axios";
import { logger, redisClient } from "..";
import { stringify, parse } from "flatted";

export class BenefitsRepository implements BenefitRepositoryInterface {
  public async getAll() {
    const cachedBenefits = await redisClient.get("benefits");

    if (cachedBenefits) {
      return parse(cachedBenefits);
    } else {
      const benefits = await axios.get(`${process.env.API_URL}/beneficios`);

      await redisClient.set("benefits", stringify(benefits));

      return benefits;
    }
  }

  public async getById(id: number) {
    const cachedBenefit = await redisClient.get(`benefit-${id}`);

    if (cachedBenefit) {
      return parse(cachedBenefit);
    } else {
      const benefit = await axios.get(
        `${process.env.API_URL}/beneficios/${id}`
      );

      await redisClient.set(`benefit-${id}`, stringify(benefit));

      return benefit;
    }
  }
}
