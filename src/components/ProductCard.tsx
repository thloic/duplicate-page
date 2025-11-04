"use client";

export interface Product {
  id: string;
  brand: string;
  model: string;
  imageUrl: string;
  price: number;
  priceWithAid: number;
  discount: number;
  rating?: number;
  reviewCount?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Brand Logo */}
      <div className="p-3 border-b border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-1 mb-0.5">
          <div className="w-2 h-2 bg-red-600 rotate-45"></div>
          <div className="w-2 h-2 bg-red-600 rotate-45 -ml-0.5"></div>
          <div className="w-2 h-2 bg-red-600 rotate-45 -ml-0.5"></div>
        </div>
        <div className="font-black text-xs tracking-tight text-gray-900 leading-none">
          MITSUBISHI
        </div>
        <div className="font-black text-xs tracking-tight text-gray-900 leading-none">
          ELECTRIC
        </div>
        <div className="text-[9px] text-gray-500 mt-0.5 italic leading-none">
          Changes for the Better
        </div>
      </div>

      {/* Product Image */}
      <div className="relative bg-white p-4 flex-shrink-0">
        <img
          src={product.imageUrl}
          alt={product.model}
          className="w-full h-32 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 space-y-2 flex-grow flex flex-col">
        {/* Title */}
        <div className="flex-grow">
          <h3 className="text-sm font-bold text-blue-900 leading-tight mb-1">
            {product.model}
          </h3>
          <p className="text-xs text-gray-600">{product.brand}</p>
        </div>

        {/* Rating (if exists) */}
        {product.rating && (
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-orange-400 text-xs">★</span>
              ))}
            </div>
            <span className="text-[10px] text-gray-600">({product.reviewCount} avis)</span>
          </div>
        )}

        {/* Price Section */}
        <div className="space-y-1 pt-2">
          <div className="text-[10px] text-gray-600">
            Livré et installé, à partir de
          </div>
          
          <div className="flex items-end gap-1.5">
            <div className="text-xl font-bold text-blue-900 leading-none">
              {product.priceWithAid.toLocaleString('fr-FR', { 
                minimumFractionDigits: 0,
                maximumFractionDigits: 0 
              })} €
            </div>
            <div className="text-sm text-gray-900 mb-0.5">TTC</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-gray-400 line-through text-xs">
              {product.price.toLocaleString('fr-FR', { 
                minimumFractionDigits: 0,
                maximumFractionDigits: 0 
              })} €TTC
            </div>
            <div className="bg-white border border-blue-600 text-blue-600 px-1.5 py-0.5 rounded-full text-[10px] font-bold">
              -{product.discount}%
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-md font-bold text-xs hover:bg-blue-700 transition-colors mt-auto">
          Voir le produit
        </button>
      </div>
    </div>
  );
}