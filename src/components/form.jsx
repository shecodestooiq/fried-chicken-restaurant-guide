import React, { useState } from 'react';
import FC from '../FC.png';

function Form({ addRestaurant }) {
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantLocation, setRestaurantLocation] = useState('');
    const [restaurantRate, setRestaurantRate] = useState(0);

    const handleAddRestaurant = (e) => {
        e.preventDefault();
        addRestaurant({
            name: restaurantName,
            location: restaurantLocation,
            rate: parseInt(restaurantRate),
        });
        setRestaurantName('');
        setRestaurantLocation('');
        setRestaurantRate('');
    };

    return (
        <div className='form-img'>
            <center><img src={FC} alt="bg" /></center>
            <form>
                <label>Restaurant Name</label>
                <input
                    type='text'
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                />
                <label>Location</label>
                <input
                    type='text'
                    value={restaurantLocation}
                    onChange={(e) => setRestaurantLocation(e.target.value)}
                />
                <label>Rate</label>
                <input
                    type='text'
                    value={restaurantRate}
                    onChange={(e) => setRestaurantRate(e.target.value)}
                />
                <button onClick={handleAddRestaurant}>Add Restaurant</button>
            </form>
        </div>
    );
}

export default Form;
