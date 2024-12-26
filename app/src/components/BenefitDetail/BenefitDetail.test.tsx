import React from "react";
import { render } from "@testing-library/react";
import { BenefitDetail } from "./BenefitDetail";
import "@testing-library/jest-dom";

describe("BenefitDetail Component", () => {
  const mockBenefitDetail = {
    id: 1,
    brand_name: "Brand A",
    image: "https://example.com/images/brand-a.jpg",
    discount: 20,
    description: "This is a great offer for Brand A.",
    clarification: "Valid for new customers only.",
    is_card_payment_method: true,
    is_cash_payment_method: false,
    general_category_name: "Electronics",
    simple_category_name: "Smartphones",
    dium: {
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: false,
      sunday: true,
      holidays: true,
    },
  };

  it("renders the correct image URL and displays the image", () => {
    const { getByAltText } = render(<BenefitDetail item={mockBenefitDetail} />);

    const image = getByAltText("Image of the branch");

    expect(image).toHaveAttribute(
      "src",
      "https://example.com/images/brand-a.jpg"
    );

    expect(image).toBeInTheDocument();
  });
});
