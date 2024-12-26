"use client";
import { Benefit, BenefitDetail } from "@/types";
import useSWR from "swr";

export const GetBenefits = () => {
  return useSWR<Benefit[], Error>(`${process.env.NEXT_PUBLIC_HOST}/benefits`);
};

export const GetBenefitById = (id: string) => {
  return useSWR<BenefitDetail, Error>(
    `${process.env.NEXT_PUBLIC_HOST}/benefits/${id}`
  );
};
