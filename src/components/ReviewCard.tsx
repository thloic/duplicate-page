"use client";

import { Review } from "@/constants/products";
import { Star, MapPin } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      {/* En-tête */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-gray-900 mb-1">{review.name}</h4>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{review.location}</span>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      {/* Commentaire */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {review.comment}
      </p>

      {/* Produit et date */}
      <div className="flex justify-between items-center text-xs text-gray-500">
        {review.product && (
          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
            {review.product}
          </span>
        )}
        <span>
          {new Date(review.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </div>
  );
}