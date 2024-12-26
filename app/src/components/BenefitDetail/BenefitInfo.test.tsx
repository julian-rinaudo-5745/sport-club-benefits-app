import React from "react";
import { render } from "@testing-library/react";
import { BenefitInfo } from "./BenefitInfo";
import "@testing-library/jest-dom";

describe("BenefitInfo", () => {
  it("renders description and additional info correctly", () => {
    const description = "This is a benefit description";
    const aditionalInfo = "This is some additional information";

    const { getByText } = render(
      <BenefitInfo description={description} aditionalInfo={aditionalInfo} />
    );

    expect(getByText(description)).toBeInTheDocument();
    expect(getByText("Información adicional:")).toBeInTheDocument();
    expect(getByText(aditionalInfo)).toBeInTheDocument();
  });

  it("applies correct classes to elements", () => {
    const description = "This is a benefit description";
    const aditionalInfo = "This is some additional information";

    const { container } = render(
      <BenefitInfo description={description} aditionalInfo={aditionalInfo} />
    );

    expect(container.querySelector(".mb-8")).toBeInTheDocument();
    expect(container.querySelector(".mt-4.text-xl")).toBeInTheDocument();
    expect(
      container.querySelector(".text-gray-600.text-sm.whitespace-pre-line")
    ).toBeInTheDocument();
    expect(container.querySelector(".font-bold")).toBeInTheDocument();
  });
});
