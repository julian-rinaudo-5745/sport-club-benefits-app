import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders the footer component", () => {
    const { getByText } = render(<Footer />);

    // Check for section titles
    expect(getByText("SOCIO")).toBeInTheDocument();
    expect(getByText("LEGAL")).toBeInTheDocument();

    // Check for links under SOCIO section
    expect(getByText("Atención al Socio")).toBeInTheDocument();
    expect(getByText("Solicitud de Baja")).toBeInTheDocument();
    expect(getByText("Trámite de Arrepentimiento")).toBeInTheDocument();

    // Check for links under LEGAL section
    expect(getByText("Eventos y Sorteos")).toBeInTheDocument();
    expect(
      getByText(
        "Contratos de Adhesión - Ley nro. 24.240 de defensa del consumidor"
      )
    ).toBeInTheDocument();
    expect(
      getByText("Términos y Condiciones Generales - Uso y App")
    ).toBeInTheDocument();
    expect(getByText("Política de Privacidad")).toBeInTheDocument();
    expect(
      getByText("Términos y condiciones Programa de Beneficios")
    ).toBeInTheDocument();

    // Check for footer text
    expect(
      getByText(
        "En SportClub cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329)."
      )
    ).toBeInTheDocument();
    expect(
      getByText("Copyright (c) 2022 SPORTCLUB. Todos los derechos reservados.")
    ).toBeInTheDocument();
  });

  it("applies the correct classes to elements", () => {
    const { container } = render(<Footer />);

    // Check for footer class
    const footerElement = container.querySelector("footer");
    expect(footerElement).toHaveClass("bg-black text-white");

    // Check for container class
    const containerElement = container.querySelector(".container");
    expect(containerElement).toHaveClass("mx-auto px-4 py-12");

    // Check for grid classes
    const gridElement = container.querySelector(".grid");
    expect(gridElement).toHaveClass("grid-cols-1 md:grid-cols-12 gap-8");

    // Check for section title class
    const sectionTitleElement = container.querySelector("h3");
    expect(sectionTitleElement).toHaveClass("text-white font-semibold mb-4");

    // Check for link class
    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveClass("text-gray-400 hover:text-white text-sm");

    // Check for footer text class
    const footerTextElement = container.querySelector(".text-center");
    expect(footerTextElement).toHaveClass("text-gray-400 text-sm space-y-2");
  });
});
