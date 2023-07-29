import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, onRate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => onRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
