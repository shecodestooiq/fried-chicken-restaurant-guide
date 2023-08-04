import React from 'react';
import img1 from '../Food_Logo2.png';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant, deleteRestaurant, updateRange }) => {
  return (
    <ul className='restaurantsCards'>
          {restaurant?.map((rest) => (
            <li key={rest.id} className='card'>
                <img src={img1} alt='chicken' />
                <h3>{rest.name}</h3>
                <h4>Location: {rest.location}</h4>
                <h4 className='rateColor'>Rate: ⭐️⭐️⭐️⭐️ {rest.range}</h4>
                <div className='cardButton'>
                    <button onClick={() => deleteRestaurant(rest.id)}>Delete</button>
                    <button onClick={() => updateRange(rest.id)}>Change Rate</button>
                </div>
                <Link to = {`/restaurant-details/${rest.id}`} state = {{ restaurant: rest }} className="more-btn">
                    <h3>More Details</h3>
                </Link>
            </li>
          ))}
    </ul>
    
  );
};

export default RestaurantCard;
