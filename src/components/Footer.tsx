import Link from "next/link";
import React from "react";

const sections = [
  {
    title: "SOCIO",
    links: [
      { text: "Atención al Socio", url: "#" },
      { text: "Solicitud de Baja", url: "#" },
      { text: "Trámite de Arrepentimiento", url: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { text: "Eventos y Sorteos", url: "#" },
      {
        text: "Contratos de Adhesión - Ley nro. 24.240 de defensa del consumidor",
        url: "#",
      },
      { text: "Términos y Condiciones Generales - Uso y App", url: "#" },
      { text: "Política de Privacidad", url: "#" },
      { text: "Términos y condiciones Programa de Beneficios", url: "#" },
    ],
  },
];
export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-white font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <Link
                          href={link.url}
                          className="text-gray-400 hover:text-white text-sm"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="text-center text-gray-400 text-sm space-y-2">
          <p>
            En SportClub cuidamos tu salud, por eso te recordamos que tu apto
            médico es indispensable al momento de iniciar una actividad física
            (leyes nº 139 y 12329).
          </p>
          <p>Copyright (c) 2022 SPORTCLUB. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
