import React from "react";

export const Hero = () => {
  return (
    <section className="relative bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
        alt="Hero"
        className="w-full h-[500px] object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Descubrí tus beneficios
          </h1>
          <p className="text-xl mb-8">
            Los mejores descuentos en un solo lugar
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
            ¡VER MÁS!
          </button>
        </div>
      </div>
    </section>
  );
};
