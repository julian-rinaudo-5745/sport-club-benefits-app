import { Benefit } from "@/types";

import React from "react";

export function BenefitCard({ item }: { item: Benefit }) {
  const { comercio, descuento, Imagens } = item;
  return (
    <div
      role="listitem"
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full"
    >
      <div className="h-48 relative bg-gray-100">
        <img
          src={Imagens[0].url}
          alt="Image of the branch"
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 h-24 flex items-center">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold leading-none">{descuento}%</span>
          <div className="flex flex-col">
            <span className="font-semibold text-lg leading-tight">
              {comercio}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
