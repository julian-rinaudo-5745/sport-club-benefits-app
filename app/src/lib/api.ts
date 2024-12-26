"use client";
import { Benefit, BenefitDetail, EndpointWrapper } from "@/types";
import useSWR from "swr";

export const GetBenefits = () => {
  return useSWR<EndpointWrapper<{ beneficios: Benefit[] }>, Error>(
    "https://api-beneficios.prod.sportclub.com.ar/api/beneficios"
  );
};

export const GetBenefitById = (id: string) => {
  return useSWR<EndpointWrapper<BenefitDetail>, Error>(
    `https://api-beneficios.prod.sportclub.com.ar/api/beneficios/${id}`
  );
};
