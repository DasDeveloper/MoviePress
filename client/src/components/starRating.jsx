import React, { useState } from 'react';
import "../css/starRating.css"

const StarRating = () => {
  const [rating, setRating] = useState(0); // State to hold the rating value

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <p>Selected rating: {rating}</p>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            filled={value <= rating}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

const Star = ({ value, filled, onClick }) => (
  <span
    className={`star ${filled ? 'filled' : ''}`}
    onClick={() => onClick(value)}
  >
    &#9733;
  </span>
);

export default StarRating;
