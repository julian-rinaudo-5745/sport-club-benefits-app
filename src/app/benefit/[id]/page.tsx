"use client";
import React, { useEffect, useState } from "react";
import { GetBenefitById } from "@/lib/api";

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

  const {
    Imagens,
    descripcion,
    aclaratoria,
    descuento,
    tarjeta,
    efectivo,
    CategoriaGeneral,
    CategoriaSimple,
    // Dium,
  } = data.body;
  return (
    <div>
      <img
        src={Imagens?.[0].url}
        alt={`Image of the branch`}
        width={200}
        height={200}
        aria-labelledby={`image-${benefitId}`}
      />
      <p>{descripcion}</p>
      <p>{aclaratoria}</p>
      <p>{descuento}</p>
      <p>{efectivo}</p>
      <p>{tarjeta}</p>
      <p>{CategoriaGeneral?.nombre}</p>
      <p>{CategoriaSimple?.nombre}</p>
      {/* <p>{Dium}</p> */}
    </div>
  );
}
