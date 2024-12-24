import { BenefitDetail as Props } from "@/types";
import { BenefitHeader } from "@/components/BenefitDetail/BenefitHeader";
import { BenefitInfo } from "@/components/BenefitDetail/BenefitInfo";
import { BenefitMetadata } from "@/components/BenefitDetail/BenefitMetaData";

export function BenefitDetail({ item }: { item: Props }) {
  const paymentsMethods = { card: item.tarjeta, cash: item.efectivo };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="container mx-auto px-4">
        {/* <Breadcrumb
          items={[benefit.category, benefit.subcategory, benefit.name]}
        /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-8">
              <img
                src={item.Imagens?.[0].url}
                alt="Image of the branch"
                className="w-full object-contain"
              />
            </div>
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
