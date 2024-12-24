import React from "react";
import { Store, RefreshCw, Wallet, Calendar } from "lucide-react";
import { MetadataItem } from "@/components/BenefitDetail/BenefitMetaItem";
import { Dium } from "@/types";
import { Days } from "@/enum/days";
import { PaymentsMethods } from "@/enum/paymentsMethods";

interface Props {
  paymentMethod: {
    card: boolean;
    cash: boolean;
  };
  availableDays: Dium;
}

export function BenefitMetadata({ paymentMethod, availableDays }: Props) {
  const { card, cash } = paymentMethod;

  const getPaymentMethods = (): string => {
    const methods = [];

    if (card) methods.push(PaymentsMethods.Card);
    if (cash) methods.push(PaymentsMethods.Cash);

    return methods.join("/");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MetadataItem
        icon={<Store className="h-6 w-6" />}
        title="Tipo de Comercio"
        value="Físico"
      />
      <MetadataItem
        icon={<RefreshCw className="h-6 w-6" />}
        title="Modo de Canje"
        value="App SportClub"
      />
      <MetadataItem
        icon={<Wallet className="h-6 w-6" />}
        title="Método de pago"
        value={getPaymentMethods()}
      />
      <div className="flex items-start gap-4">
        <Calendar className="h-6 w-6 text-gray-600" />
        <div>
          <h3 className="font-semibold mb-2">Días disponibles</h3>
          <div className="flex gap-1">
            {Object.values(Days).map((day, index) => {
              const isAvailableDay = availableDays?.[day];

              return (
                <span
                  key={`day${index}`}
                  className={`
                  w-8 h-8 flex items-center justify-center rounded-full text-sm
                  ${
                    isAvailableDay
                      ? "bg-yellow-200 text-black"
                      : "bg-gray-100 text-gray-400"
                  }
                `}
                >
                  {day.charAt(0).toUpperCase()}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
