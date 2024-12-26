import { Benefit } from "@/types";

import React from "react";

export function BenefitCard({ item }: { item: Benefit }) {
  return (
    <div
      role="listitem"
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full"
    >
      <div className="h-48 relative bg-gray-100">
        <img
          data-testid="brand-image"
          src={item.image}
          alt="Image of the branch"
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 h-24 flex items-center">
        <div className="flex items-baseline gap-2">
          <span
            data-testid="discount-text"
            className="text-4xl font-bold leading-none"
          >
            {item.discount}%
          </span>
          <div className="flex flex-col">
            <span
              data-testid="brand-name"
              className="font-semibold text-lg leading-tight"
            >
              {item.brand_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
