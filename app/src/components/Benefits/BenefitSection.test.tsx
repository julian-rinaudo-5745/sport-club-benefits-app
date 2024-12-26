import React from "react";
import { render } from "@testing-library/react";
import { BenefitsSection } from "./BenefitSection";
import "@testing-library/jest-dom";

const benefitsMock = [
  {
    id: 1,
    brand_name: "Brand A",
    discount: 20,
    image: "https://example.com/images/brand-a.jpg",
  },
  {
    id: 2,
    brand_name: "Brand B",
    discount: 15,
    image: "https://example.com/images/brand-b.jpg",
  },
];

describe("BenefitSection", () => {
  it("renders the title correctly", () => {
    const { getByTestId } = render(
      <BenefitsSection title="Test Title" benefits={benefitsMock} />
    );
    expect(getByTestId("title")).toHaveTextContent("Test Title");
  });

  it("renders the correct number of BenefitCard components", () => {
    const { getAllByRole } = render(
      <BenefitsSection title="Test Title" benefits={benefitsMock} />
    );

    expect(getAllByRole("link")).toHaveLength(benefitsMock.length);
  });

  it("renders each BenefitCard component with the correct href", () => {
    const { getByTestId } = render(
      <BenefitsSection title="Test Title" benefits={benefitsMock} />
    );
    benefitsMock.forEach((benefit) => {
      const link = getByTestId(`single-benefit-link-${benefit.id}`);
      expect(link).toHaveAttribute("href", `benefit/${benefit.id}`);
    });
  });
});
