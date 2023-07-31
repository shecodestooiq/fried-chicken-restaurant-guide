import React, { useState } from 'react';

const FriedChickenRestaurantsPage = () => {
  const initialRestaurants = [
    { id: 1, name: 'Chicken Heaven', location: '123 Main St, City', rating: 0.4 },
    { id: 2, name: 'Fried Delight', location: '456 First Ave, Town', rating: 4.4 },
    { id: 3, name: 'Crispy Coop', location: '789 Broadway, Village', rating: 5.4 },
  ];

  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', location: '', rating: '' });
  const [updatedRating, setUpdatedRating] = useState('');

  const handleAddRestaurant = () => {
    if (newRestaurant.name && newRestaurant.location && newRestaurant.rating) {
      const newId = restaurants.length + 1;
      const newRestaurantEntry = {
        id: newId,
        name: newRestaurant.name,
        location: newRestaurant.location,
        rating: parseFloat(newRestaurant.rating),
      };

      setRestaurants([...restaurants, newRestaurantEntry]);
      setNewRestaurant({ name: '', location: '', rating: '' });
    }
  };

  const handleDeleteRestaurant = (id) => {
    const updatedRestaurants = restaurants.filter((restaurant) => restaurant.id !== id);
    setRestaurants(updatedRestaurants);
  };

  const handleChangeRating = (id) => {
    const updatedRestaurants = restaurants.map((restaurant) =>
      restaurant.id === id ? { ...restaurant, rating: parseFloat(updatedRating) } : restaurant
    );
    setRestaurants(updatedRestaurants);
    setUpdatedRating('');
  };

  return (
    <div>
      <h1>Fried Chicken Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.location}- (Rating: {restaurant.rating})
            <button onClick={() => handleDeleteRestaurant(restaurant.id)}>Delete</button>
            <div>
              <label>
                New Rating:
                <input
                  type="number"
                  step="0.1"
                  value={updatedRating}
                  onChange={(e) => setUpdatedRating(e.target.value)}
                />
              </label>
              <button onClick={() => handleChangeRating(restaurant.id)}>Change Rating</button>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <label>
          Name:
          <input
            type="text"
            value={newRestaurant.name}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            value={newRestaurant.location}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, location: e.target.value })}
            required
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            step="0.1"
            value={newRestaurant.rating}
            onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })}
            required
          />
        </label>

        <button onClick={handleAddRestaurant}>Add Restaurant</button>
      </div>
    </div>
  );
};

export default FriedChickenRestaurantsPage;
