"use client";
import React, { useEffect, useState } from "react";
import { GetBenefitById } from "@/lib/api";
import { BenefitDetail } from "@/components/BenefitDetail/BenefitDetail";
import { Loading } from "@/components/Loading/Loading";
import { redirect } from "next/navigation";

interface Param {
  params: Promise<{ id: string }>;
}

export default function BenefitDetails({ params }: Param) {
  const [benefitId, setBenefitId] = useState<string>("");

  useEffect(() => {
    const resolveParams = async () => {
      const id = (await params).id;
      setBenefitId(id);
    };

    resolveParams();
  }, [params]);

  const { data, error, isLoading } = GetBenefitById(benefitId);

  if (isLoading) return <Loading />;

  if (error)
    console.error("Erros inesperado al obtener el beneficio", error.message);

  if (!data || data.status > 400) return redirect("/not-found");

  return <BenefitDetail item={data.body} />;
}
