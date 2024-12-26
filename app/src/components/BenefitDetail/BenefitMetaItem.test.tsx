import React from "react";
import { render } from "@testing-library/react";
import { MetadataItem } from "./BenefitMetaItem";
import "@testing-library/jest-dom";

describe("MetadataItem", () => {
  it("renders the icon, title, and value correctly", () => {
    const icon = <span>Icon</span>;
    const title = "Test Title";
    const value = "Test Value";

    const { getByText } = render(
      <MetadataItem icon={icon} title={title} value={value} />
    );

    expect(getByText("Icon")).toBeInTheDocument();
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Value")).toBeInTheDocument();
  });

  it("applies the correct classes to elements", () => {
    const icon = <span>Icon</span>;
    const title = "Test Title";
    const value = "Test Value";

    const { container } = render(
      <MetadataItem icon={icon} title={title} value={value} />
    );

    const iconElement = container.querySelector(".text-gray-600");
    const titleElement = container.querySelector("h3");
    const valueElement = container.querySelector("p");

    expect(iconElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("font-semibold mb-1");
    expect(valueElement).toHaveClass("text-gray-600");
  });
});
