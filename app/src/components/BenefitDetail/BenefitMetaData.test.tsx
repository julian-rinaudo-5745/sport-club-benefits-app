import React from "react";
import { render } from "@testing-library/react";
import { BenefitMetadata } from "./BenefitMetaData";
import { PaymentMethods } from "@/enum/paymentsMethods";
import { Days } from "@/enum/days";
import "@testing-library/jest-dom";

const days = {
  [Days.MONDAY]: true,
  [Days.TUESDAY]: false,
  [Days.WEDNESDAY]: false,
  [Days.THURSDAY]: false,
  [Days.FRIDAY]: false,
  [Days.SATURDAY]: false,
  [Days.SUNDAY]: false,
  [Days.HOLIDAY]: false,
};

describe("BenefitMetadata", () => {
  it("renders payment methods correctly", () => {
    const paymentMethod = { card: true, cash: true };

    const { getByText } = render(
      <BenefitMetadata paymentMethod={paymentMethod} availableDays={days} />
    );

    expect(
      getByText(`${PaymentMethods.Card}/${PaymentMethods.Cash}`)
    ).toBeInTheDocument();
  });

  it("renders metadata items correctly", () => {
    const paymentMethod = { card: true, cash: false };

    const { getByText } = render(
      <BenefitMetadata paymentMethod={paymentMethod} availableDays={days} />
    );

    expect(getByText("Tipo de Comercio")).toBeInTheDocument();
    expect(getByText("Físico")).toBeInTheDocument();
    expect(getByText("Modo de Canje")).toBeInTheDocument();
    expect(getByText("App SportClub")).toBeInTheDocument();
    expect(getByText("Método de pago")).toBeInTheDocument();
    expect(getByText(PaymentMethods.Card)).toBeInTheDocument();
  });
});
