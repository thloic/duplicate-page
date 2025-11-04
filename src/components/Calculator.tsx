"use client";

import { useState } from "react";
import { Info } from "lucide-react";

export default function Calculator() {
  const [surface, setSurface] = useState(50);

  return (
    <section className="max-w-6xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
      {/* Colonne gauche : Bleu nuit */}
      <div className="bg-[#081C4A] text-white flex flex-col justify-center p-10 lg:w-1/3">
        <h2 className="text-3xl font-bold mb-3">Je trouve mon produit</h2>
        <p className="text-blue-100 text-lg">
          Trouvez la pompe à chaleur adaptée à vos besoins en 30 secondes !
        </p>
      </div>

      {/* Colonne droite : partie blanche / formulaire */}
      <div className="bg-white lg:w-2/3 p-10 flex flex-col justify-center">
        <div className="text-sm text-gray-500 mb-2 font-semibold">
          Étape 1 sur 7
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          Je veux chauffer une <span className="text-blue-700">surface</span> de{" "}
          <button className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
            <Info size={16} />
          </button>
        </h3>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-blue-700">{surface}</span>
            <span className="text-2xl text-gray-500">m²</span>
          </div>
        </div>

        <input
          type="range"
          min="50"
          max="250"
          step="10"
          value={surface}
          onChange={(e) => setSurface(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #0045c4 0%, #0045c4 ${
              ((surface - 50) / 200) * 100
            }%, #e5e7eb ${((surface - 50) / 200) * 100}%, #e5e7eb 100%)`,
          }}
        />

        <div className="flex justify-between text-sm text-gray-400 mt-3 mb-6">
          <span>≤ 50</span>
          <span>100</span>
          <span>150</span>
          <span>200</span>
          <span>≥ 250</span>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all">
            Suivant
          </button>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0045c4;
          cursor: pointer;
          box-shadow: 0 0 6px rgba(0, 69, 196, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0045c4;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
