"use client";
import React, { useEffect, useState } from "react";
import { GetBenefitById } from "@/lib/api";
import { BenefitDetail } from "@/components/BenefitDetail/BenefitDetail";

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

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>Benefit is not found</div>;

  return <BenefitDetail item={data.body} />;
}
