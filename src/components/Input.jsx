import React, { useState } from "react";


function Form({ onSubmit: addRestaurant }) {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [restaurantRate, setRestaurantRate] = useState(0);

  const handleNameChange = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setRestaurantLocation(e.target.value);
  };

  const handleRateChange = (e) => {
    setRestaurantRate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addRestaurant({
      name: restaurantName,
      location: restaurantLocation,
      rate: restaurantRate,
    });
    setRestaurantName("");
    setRestaurantLocation("");
    setRestaurantRate("");
  };

  return (
    <form className="restaurant-form" onSubmit={handleSubmit}>
      <label htmlFor="input-name">Name</label>
      <input
        type="text"
        name="restaurant"
        id="input-name"
        value={restaurantName}
        onChange={handleNameChange}
      />
      <label htmlFor="input-location">Location</label>
      <input
        type="text"
        name="location"
        id="input-location"
        value={restaurantLocation}
        onChange={handleLocationChange}
      />
      <label htmlFor="input-rate">Rate</label>
      <input
        type="number"
        name="rate"
        id="input-rate"
        value={restaurantRate}
        onChange={handleRateChange}
      />
      <button type="submit">Add Restaurant</button>
    </form>
  );
}

export default Form;
