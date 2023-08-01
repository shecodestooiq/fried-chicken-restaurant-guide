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
        setRestaurantRate(0);
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
                <div className='rate'>
                    <input
                        className='rate-input'
                        type='range'
                        min={0}
                        max={5}
                        step={1}
                        value={restaurantRate}
                        onChange={(e) => setRestaurantRate(e.target.value)}
                    />
                    <div className='rate-display'>{restaurantRate}</div>
                </div>
                <button onClick={handleAddRestaurant}>Add Restaurant</button>
            </form>
        </div>
    );
}

export default Form;
