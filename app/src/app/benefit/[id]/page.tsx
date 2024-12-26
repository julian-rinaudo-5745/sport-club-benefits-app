"use client";
import React from "react";
import { GetBenefitById } from "@/lib/api";
import { BenefitDetail } from "@/components/BenefitDetail/BenefitDetail";
import { Loading } from "@/components/Loading/Loading";
import { redirect, useParams } from "next/navigation";

export default function BenefitDetails() {
  const params = useParams();

  if (params.id) {
    const { data, error, isLoading } = GetBenefitById(params.id as string);

    if (isLoading) return <Loading />;

    if (error) {
      console.error("Unexpected error when get a benefit", error.message);
      return redirect("/not-found");
    }

    if (!data || !data?.id) return console.log("data", data);
    return <BenefitDetail item={data} />;
  } else {
    return redirect("/not-found");
  }
}
