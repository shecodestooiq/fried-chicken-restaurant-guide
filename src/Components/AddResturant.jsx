import React, { useState } from 'react';
import '../App.css';

const AddRestaurant = ({ addRestaurant }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading

    const newRestaurant = {
      name,
      location,
      rating
    };

    addRestaurant(newRestaurant);

    setName('');
    setLocation('');
    setRating('');
  };

  return (
    <div>
      <h1>Add Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='frm'
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='frm'
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          className='frm'
          placeholder="Enter rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit" className='btn'>Add</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
