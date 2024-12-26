import { BenefitDetail as Props } from "@/types";
import { BenefitHeader } from "@/components/BenefitDetail/BenefitHeader";
import { BenefitInfo } from "@/components/BenefitDetail/BenefitInfo";
import { BenefitMetadata } from "@/components/BenefitDetail/BenefitMetaData";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function BenefitDetail({ item }: { item: Props }) {
  const [storedValue, setValue] = useLocalStorage<Props[]>(
    "favorites-benefits",
    []
  );
  const [isFavorite, setIsFavorite] = useState(false);

  const isBenefitFavorite = () => {
    return storedValue.some((value: Props) => value.id === item.id);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      const updatedFavorites = storedValue.filter(
        (value: Props) => value.id !== item.id
      );
      setValue(updatedFavorites);
    } else {
      setValue([...storedValue, item]);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(isBenefitFavorite());
  }, [storedValue, item]);

  const paymentsMethods = { card: item.tarjeta, cash: item.efectivo };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-8">
              <img
                src={item.Imagens?.[0].url}
                alt="Image of the branch"
                className="w-full object-contain"
              />
            </div>
            <button
              title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
              onClick={toggleFavorite}
              className={`my-4 flex items-center justify-center p-3 rounded-full transition-colors duration-300 
              ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-red-400 hover:text-white`}
              aria-label={
                isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
              }
            >
              <Heart
                className={`h-6 w-6 ${
                  isFavorite ? "fill-white" : "fill-none"
                } transition-colors duration-300`}
              />
            </button>
          </div>
          <div className="md:col-span-2">
            <BenefitHeader
              name={item.comercio}
              discount={item.descuento}
              category={`${item.CategoriaGeneral?.nombre} - ${item.CategoriaSimple?.nombre}`}
            />
            <BenefitInfo
              aditionalInfo={item.aclaratoria}
              description={item.descripcion}
            />
            <BenefitMetadata
              paymentMethod={paymentsMethods}
              availableDays={item.Dium}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
