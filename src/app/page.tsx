"use client";
import { BenefitsSection } from "@/components/Benefits/BenefitSection";
import { Hero } from "@/components/Hero/Hero";
import { GetBenefits } from "@/lib/api";
import "@/app/globals.css";

export default function Home() {
  const { data, error, isLoading } = GetBenefits();
  const benefits = data?.body?.beneficios;

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!benefits) return <div>No hay beneficios</div>;

  localStorage.setItem("benefits", JSON.stringify(benefits));

  return (
    <div>
      <Hero />
      <BenefitsSection title="NUEVOS BENEFICIOS" benefits={benefits} />
    </div>
  );
}
