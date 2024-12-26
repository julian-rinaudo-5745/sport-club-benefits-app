"use client";
import { BenefitsSection } from "@/components/Benefits/BenefitSection";
import { Hero } from "@/components/Hero/Hero";
import { GetBenefits } from "@/lib/api";
import { Loading } from "@/components/Loading/Loading";
import { redirect } from "next/navigation";

export default function Home() {
  const { data, error: error, isLoading } = GetBenefits();

  if (isLoading) return <Loading />;

  if (error)
    console.error("Erros inesperado al obtener beneficios", error.message);

  if (!data || !(data.length > 1)) return;
  const benefits = data;

  localStorage.setItem("benefits", JSON.stringify(benefits));

  return (
    <div>
      <Hero />
      <BenefitsSection title="NUEVOS BENEFICIOS" benefits={benefits} />
    </div>
  );
}
