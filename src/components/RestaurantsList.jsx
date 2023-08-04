import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';

export default function RestaurantsList({ restaurant, setRestaurant }) {
    const [nameValue, setNameValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [rangeValue, setRangeValue] = useState('');

    const nameChange = (event) => {
        setNameValue(event.target.value);
    };

    const locationChange = (event) => {
        setLocationValue(event.target.value);
    };

    const rangeChange = (event) => {
        setRangeValue(event.target.value);
    };

    const addRestaurant = () => {
        setRestaurant((previousInputs) => [
        ...previousInputs,
        {
            id: previousInputs.length + 1,
            name: nameValue,
            location: locationValue,
            range: rangeValue,
        },
        ]);
        setNameValue('');
        setLocationValue('');
        setRangeValue('');
    };

    const deleteRestaurant = (id) => {
        setRestaurant((previousInputs) => {
        return previousInputs.filter((rest) => rest.id !== id);
        });
    };

    const updateRange = (id) => {
        setRestaurant((previousInputs) => {
        return previousInputs.map((rest) => {
            if (rest.id === id) {
            return { ...rest, range: rangeValue };
            }
            return rest;
        });
        });
    };

    return (
        <>
            <div className='mainSection' id='addRest'>
                <h1>Explore and Add!</h1>
                <h2>Recommended Fried Chicken Restaurants in Baghdad with Special Deals!</h2>
                <div className='grid'>
                <input type='text' value={nameValue} onChange={nameChange} placeholder='Restaurant name'/>
                <input type='text' value={locationValue} onChange={locationChange} placeholder='Restaurant location' />
                <label htmlFor='range'>Rate the restaurant from 1 to 100:</label>
                <input type='range' value={rangeValue} onChange={rangeChange} />
                <button className='AddButton' onClick={addRestaurant}>
                    Add New Restaurant
                </button>
                </div>
                <RestaurantCard
                    restaurant={restaurant}
                    deleteRestaurant={deleteRestaurant}
                    updateRange={updateRange}
                />
            </div>
        </>
    );
}