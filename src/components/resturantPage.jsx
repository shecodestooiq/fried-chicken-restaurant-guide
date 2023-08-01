import React, { useState } from 'react';
import Form from './form';
import RestaurantDetails from './resturantDetails';

function ResturantPage() {
    const [restaurants, setRestaurants] = useState([
        {
            name: 'Chilly House',
            location: 'Baghdad',
            rate: 5,
        },
    ]);

    const handleAddRestaurant = (newRestaurant) => {
        setRestaurants([...restaurants, newRestaurant]);
    };

    return (
        <div>
            <Form addRestaurant={handleAddRestaurant} />
            <RestaurantDetails restaurants={restaurants} setRestaurants={setRestaurants} />
        </div>
    );
}

export default ResturantPage;
