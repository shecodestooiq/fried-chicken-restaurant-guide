import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';
import Description from './Description';

const Restaurant = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rate, setRate] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
  
    // const newTab = url => window.open(url)
    const handleAddNew = (event) => {
        event.preventDefault();
      const newRestaurant = { name, location, rate };
      setRestaurantList([...restaurantList, newRestaurant]);

      console.log("handleAddNew"+restaurantList)
    };
    console.log(restaurantList)
    const handleDelete = (index) => {
        const newRestaurant = [...restaurantList];
        newRestaurant.splice(index, 1); 
        setRestaurantList(newRestaurant);
    };
    return (
        <div className="main-menu">
            <h1>Fried-Checken Guide</h1>
            <form>
            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}  placeholder='Restaurant Name' />
            <input type='text' id='location' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location' />
            <input type='number' id='rate' value={rate} onChange={(e) => setRate(e.target.value)} placeholder='Rating' />
             <button type="submit" onClick={handleAddNew}>Add New</button>
            </form>
            <ul>
            {restaurantList.map((restaurant, index) => (
            <li key={index}>
            <div className='card' onClick={()=> window.open('/description')}>
                <h3 className='rest-name'>{restaurant.name}</h3>
                <p className='location'>{restaurant.location}</p>
                <div>
                <Rating rating={restaurant.rate}/>
                </div>
                <button className='delete' onClick={() => handleDelete(index)}> <FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>
            </li>
        ))}
        </ul>
      </div>
    );
}
export default Restaurant;


