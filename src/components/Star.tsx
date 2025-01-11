// src/components/StarRating.tsx
import React from 'react';

interface StarRatingProps {
  rating: number; // Explicitly define the type of rating as a number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array(5).fill(0); // Create an array of 5 elements

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;