"use client";

import { Product } from "@/constants/products";
import { Check, Droplets, Snowflake, ThermometerSun } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.imageUrl}
          alt={`${product.brand} ${product.model}`}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          COP {product.cop}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Marque et modèle */}
        <div className="mb-4">
          <div className="text-blue-600 font-semibold text-sm mb-1">
            {product.brand}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {product.model}
          </h3>
          <div className="text-gray-600 text-sm">
            Puissance : {product.power}
          </div>
        </div>

        {/* Icônes fonctionnalités */}
        <div className="flex gap-2 mb-4">
          {product.heating && (
            <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full text-xs text-blue-700">
              <ThermometerSun size={14} />
              <span>Chauffage</span>
            </div>
          )}
          {product.hotWater && (
            <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full text-xs text-orange-700">
              <Droplets size={14} />
              <span>ECS</span>
            </div>
          )}
          {product.reversible && (
            <div className="flex items-center gap-1 bg-cyan-50 px-3 py-1 rounded-full text-xs text-cyan-700">
              <Snowflake size={14} />
              <span>Réversible</span>
            </div>
          )}
        </div>

        {/* Caractéristiques */}
        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Prix */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-sm">Prix initial</span>
            <span className="text-gray-400 line-through text-sm">
              {product.price.toLocaleString('fr-FR')} €
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-semibold">Avec aides*</span>
            <span className="text-2xl font-bold text-blue-600">
              {product.priceWithAid.toLocaleString('fr-FR')} €
            </span>
          </div>
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md">
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
}