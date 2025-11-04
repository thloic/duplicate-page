import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-bold text-gray-900">{review.name}</div>
          <div className="text-sm text-gray-500">{review.location}</div>
        </div>
        {review.verified && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
            ✓ Vérifié
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
    </div>
  );
}