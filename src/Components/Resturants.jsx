import React, { useState } from 'react';
import Restaurant from './ChickenResturant';
import AddRestaurant from './AddResturant';
import '../App.css';


function Restaurants() {
    const [restaurants, setRestaurants] = useState([
        { name: 'Super chicken', location: 'Al Mansour', rating: '4.5' },
        { name: 'Chicken Express', location: 'Al Mansour 14 ramadan st', rating: '3.8' },
        { name: 'Fried Chicken', location: 'karada', rating: '4.2' },
    ]);

    const addRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
    };

    const deleteRestaurant = (index) => {
        const newRestaurants = [...restaurants];
        newRestaurants.splice(index, 1);
        setRestaurants(newRestaurants);
    };

    const handleRatingChange = (index, newRating) => {
        const updatedRestaurants = [...restaurants];
        updatedRestaurants[index].rating = newRating;
        setRestaurants(updatedRestaurants);
    };

    return (
        <div className='restaurants'>
            <h1>Fried Chicken Guide Web App</h1>
            {restaurants.map((restaurant, index) => (
                <Restaurant
                    key={index}
                    name={restaurant.name}
                    location={restaurant.location}
                    rating={restaurant.rating}
                    index={index}
                    onDelete={deleteRestaurant}
                    restaurants={restaurants}
                    setRestaurants={setRestaurants}
                    handleRatingChange={(newRating) => handleRatingChange(index, newRating)}

                />
            ))}
            <AddRestaurant addRestaurant={addRestaurant} />
        </div>
    );
}

export default Restaurants;