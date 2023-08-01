import React from 'react';

function RestaurantDetails({ restaurants, setRestaurants }) {
    const handleDeleteRestaurant = (index) => {
        const updatedRestaurants = [...restaurants];
        updatedRestaurants.splice(index, 1);
        setRestaurants(updatedRestaurants);
    };

    return (
        <div className='main-div'>
            {restaurants.map((res, index) => (
                <div className='res-details' key={index}>
                    <h3>{res.name}</h3>
                    <p>
                        {res.location} <span>★ {res.rate}</span>
                    </p>
                    <button onClick={() => handleDeleteRestaurant(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default RestaurantDetails;
