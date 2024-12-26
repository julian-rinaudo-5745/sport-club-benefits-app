import { logger } from "..";
import { BenefitRepositoryInterface } from "../repositories/BenefitsRepositoryInterface";
import axios from "axios";

export class BenefitsRepository implements BenefitRepositoryInterface {
  public async getAll() {
    return await axios.get(`${process.env.API_URL}/beneficios`);
  }

  public async getById(id: number) {
    return await axios.get(`${process.env.API_URL}/beneficios/${id}`);
  }
}
