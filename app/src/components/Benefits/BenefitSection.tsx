import React from "react";
import { BenefitCard } from "@/components/Benefits/BenefitCard";
import Link from "next/link";
import { Benefit } from "@/types";

interface Props {
  benefits: Benefit[];
  title: string;
}

export function BenefitsSection({ benefits, title }: Props) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 data-testid="title" className="text-2xl font-bold mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <Link
              data-testid={`single-benefit-link-${benefit.id}`}
              key={benefit.id}
              href={{
                pathname: `benefit/${benefit.id}`,
              }}
            >
              <BenefitCard item={benefit} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
