import React from "react";
import { render } from "@testing-library/react";
import { BenefitCard } from "./BenefitCard";
import "@testing-library/jest-dom";

const benefitsMock = {
  id: 1,
  brand_name: "Brand A",
  discount: 20,
  image: "https://example.com/images/brand-a.jpg",
};
describe("BenefitCard", () => {
  it("renders the card with correctly props", () => {
    const { getByTestId } = render(<BenefitCard item={benefitsMock} />);

    expect(getByTestId("brand-image")).toHaveAttribute(
      "src",
      benefitsMock.image
    );
    expect(getByTestId("discount-text").textContent).toBe(
      `${benefitsMock.discount}%`
    );
    expect(getByTestId("brand-name").textContent).toBe(benefitsMock.brand_name);
  });
});
