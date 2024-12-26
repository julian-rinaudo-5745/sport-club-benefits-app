import { logger } from "..";
import { BenefitRepositoryInterface } from "../repositories/BenefitsRepositoryInterface";
import axios from "axios";

export class BenefitsRepository implements BenefitRepositoryInterface {
  public async getAll() {
    const res = await axios.get(`${process.env.API_URL}/beneficios`);
    return res.data;
  }

  public async getById(id: number) {
    const res = await axios.get(`${process.env.API_URL}/beneficios/${id}`);
    return res.data;
  }
}
