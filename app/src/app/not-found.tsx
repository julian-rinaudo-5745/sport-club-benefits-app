import { ArrowLeft, Dumbbell } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Dumbbell className="h-32 w-32 text-red-500 animate-bounce" />
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              404
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          ¡Ups! Esta página está haciendo una pausa
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Parece que el beneficio que buscás no existe o fue removido. ¡No te
          preocupes! Tenemos muchos otros descuentos esperándote.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
