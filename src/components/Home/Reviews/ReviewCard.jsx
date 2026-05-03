import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <div className="bg-base-100 p-4 border-3 border-gray-300 rounded-lg shadow-sm flex flex-col gap-2 hover:shadow-lg hover:border-amber-100 transition-shadow duration-300 h-full">
        <Image
          src={review.avatar}
          alt={review.userName}
          width={20}
          height={20}
          className="w-12 h-12 rounded-full bg-slate-100"
        />
        <h4 className="font-bold text-slate-900">{review.userName}</h4>
        <p className="text-xs text-slate-500">{review.date}</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-slate-300"
              }
            />
          ))}
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          &quot;{review.comment}&quot;
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
