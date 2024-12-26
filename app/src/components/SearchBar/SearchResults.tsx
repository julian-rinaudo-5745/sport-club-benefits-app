import { Benefit } from "@/types";
import React from "react";
import Link from "next/link";

interface Props {
  results: Benefit[];
  isVisible: boolean;
}

export function SearchResults({ results, isVisible }: Props) {
  if (!isVisible || results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
      <div className="p-4 border-b border-gray-200">
        <p className="text-sm text-gray-600">Resultados {results.length}</p>
      </div>
      <div className="divide-y divide-gray-100">
        {results.map((result) => (
          <Link
            key={`${result.id}-${result.brand_name}`}
            href={{
              pathname: `/benefit/${result.id}`,
            }}
          >
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer">
              <img
                src={result.image}
                alt="brand image"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{result.brand_name}</h3>
                <p className="text-gray-600">{result.discount}% de descuento</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
