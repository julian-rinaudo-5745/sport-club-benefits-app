"use client";
import { BenefitCard } from "@/components/BenefitCard";
import { SearchBar } from "@/components/SearchBar";
import { GetBenefits } from "@/lib/api";
import { Benefit } from "@/types";
import Link from "next/link";

export default function Home() {
  const { data, error, isLoading } = GetBenefits();
  const benefits = data?.body?.beneficios;

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const suggestions =
    benefits?.map((item) => ({ id: item.id, name: item.comercio })) ?? [];

  return (
    <div>
      <h1>Hola mundo</h1>
      <SearchBar suggestions={suggestions} />
      {benefits?.map((item: Benefit) => {
        return (
          <Link
            key={item.id}
            href={{
              pathname: `/benefit/${item.id}`,
            }}
          >
            <BenefitCard item={item} />{" "}
          </Link>
        );
      })}
    </div>
  );
}
