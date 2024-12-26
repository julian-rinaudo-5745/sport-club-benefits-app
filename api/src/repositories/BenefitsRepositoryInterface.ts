import { AxiosResponse } from "axios";
import { Benefit, BenefitDetail } from "../../types";

export interface BenefitRepositoryInterface {
  getAll(): Promise<AxiosResponse<{ body: { beneficios: Benefit[] } }>>;
  getById(id: number): Promise<AxiosResponse<{ body: BenefitDetail }>>;
}
