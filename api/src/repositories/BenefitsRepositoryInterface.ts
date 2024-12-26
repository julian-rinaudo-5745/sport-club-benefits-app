import { AxiosResponse } from "axios";

export interface BenefitRepositoryInterface {
  getAll(): Promise<AxiosResponse>;
  getById(id: number): Promise<AxiosResponse>;
}
