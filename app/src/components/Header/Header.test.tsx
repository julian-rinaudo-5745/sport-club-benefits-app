import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";
import "@testing-library/jest-dom";
import { SPORT_CLUB_LOGO } from "@/constants";

describe("Header", () => {
  it("renders the header component", () => {
    const { getByAltText, getByTestId } = render(<Header />);

    // Check for logo
    const logo = getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", SPORT_CLUB_LOGO);

    // Check for SearchBar
    const searchBar = getByTestId("search-bar");
    expect(searchBar).toBeInTheDocument();
  });

  it("applies the correct classes to elements", () => {
    const { container } = render(<Header />);

    // Check for header class
    const headerElement = container.querySelector("header");
    expect(headerElement).toHaveClass("sticky top-0 z-50 bg-white shadow-sm");

    // Check for container class
    const containerElement = container.querySelector(".container");
    expect(containerElement).toHaveClass("mx-auto px-4");

    // Check for flex container class
    const flexContainer = container.querySelector(".flex");
    expect(flexContainer).toHaveClass("items-center gap-8 py-4");

    // Check for logo class
    const logoElement = container.querySelector("img");
    expect(logoElement).toHaveClass("h-8 w-fit object-contain");
  });
});
