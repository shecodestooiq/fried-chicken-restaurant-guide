import React from 'react';
import '../App.css';

const Restaurant = ({ name, location, rating, onDelete, index }) => {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="restaurant">
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <p>Rating: {rating}</p>
      <button className='btn' onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Restaurant;
