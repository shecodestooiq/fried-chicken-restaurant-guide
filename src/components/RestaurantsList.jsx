import React, { useState } from 'react';
import img1 from '../Food_Logo2.png'

export default function RestaurantsList() {
    const [restaurant, setRestaurant] = useState([{
        id:1,
        name: "FireFly",
        location: "Yarmouk",
        range: 90
    }, {
        id:2,
        name: "Foodland",
        location: "Harthyia",
        range: 30
    }, {
        id:3,
        name: "Yumyum",
        location: "Saydia",
        range: 80
    }]);
    
    const [nameValue, setNameValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [rangeValue, setRangeValue] = useState('');

    const nameChange = (event) => {
        setNameValue(event.target.value)
    };
    const locationChange = (event) => {
        setLocationValue(event.target.value)
    };
    const rangeChange = (event) => {
        setRangeValue(event.target.value)
    };

    const addRestaurant = () => {
        setRestaurant(previousInputs => ([...previousInputs,{id: restaurant.length + 1,name: nameValue, location: locationValue, range: rangeValue}]));
        setNameValue("")
        setLocationValue("")
        setRangeValue("")
    }

    const deleteRestaurant = (id) => {
        setRestaurant(previousInputs => {
            return previousInputs.filter(rest =>
            rest.id !== id)
        })
    };

    const updateRange = (id) => {
        setRestaurant(previousInputs => {
            return previousInputs.map(rest => {
                if (rest.id === id) {
                    return {...rest, range: rangeValue};
                }
                return rest
            })
        })
    }

    return(
        <>
            <div className='header'>
                <div>
                    <h1>Discover The Highest Rated Restaurants For Fried Chicken!🍗 </h1>
                    <h2>Start Scrolling...</h2>
                </div>
            </div>
            <div className='mainSection'>
                <h1>Explore and Add!</h1>
                <h2>Recommended Fried Chicken Restaurants in Baghdad with Special Deals!</h2>
                <div className='grid'>
                    <input type="text" value={nameValue} onChange={nameChange} placeholder="Restaurant name"/>
                    <input type="text" value={locationValue} onChange={locationChange} placeholder="Restaurant location"/>
                    <label htmlFor="range">Rate the restaurant from 1 to 100:</label>
                    <input type="range" value={rangeValue} onChange={rangeChange}/>
                    <button className='AddButton' onClick={addRestaurant}>Add New Restaurant</button>
                </div>
                <ul className='restaurantsCards'>
                    {restaurant.map((rest,index) => (
                    <li key={index} className='card'>
                        <img src={img1} alt="" />
                        <h3>{rest.name}</h3>
                        <h4>Location: {rest.location}</h4>
                        <h4 className='rateColor'>Rate: ⭐️⭐️⭐️⭐️ {rest.range}</h4>
                        <div className='cardButton'>
                        <button onClick={()=>deleteRestaurant(rest.id)}>Delete</button>
                        <button onClick={()=>updateRange(rest.id)}>Change Rate</button></div>
                    </li>))}
                </ul>
            </div>
            <div className='footer'>
                <div>
                    <h2>Have a good meal :) ❤️</h2>
                </div>
                {/* <div className='imgContainer'><img src={img} className="headerImg"/></div> */}
            </div>
        </>
    );
}