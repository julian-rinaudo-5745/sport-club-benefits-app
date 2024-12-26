import React from "react";
import { render } from "@testing-library/react";
import { BenefitHeader } from "./BenefitHeader";
import "@testing-library/jest-dom";

describe("BenefitHeader", () => {
  it("renders the name and discount correctly", () => {
    const { getByText } = render(
      <BenefitHeader name="Brand A" discount={20} category="Electronics" />
    );
    expect(getByText("20% de descuento en Brand A")).toBeInTheDocument();
  });

  it("renders the category correctly", () => {
    const { getByText } = render(
      <BenefitHeader name="Brand A" discount={20} category="Electronics" />
    );
    expect(getByText("Categoría: Electronics")).toBeInTheDocument();
  });

  it("applies the correct class names", () => {
    const { container } = render(
      <BenefitHeader name="Brand A" discount={20} category="Electronics" />
    );
    expect(container.firstChild).toHaveClass("mb-8");
    expect(container.querySelector("h1")).toHaveClass(
      "text-3xl font-bold mb-2"
    );
    expect(container.querySelector("p")).toHaveClass("text-lg text-gray-600");
  });
});
