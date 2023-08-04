import React from 'react';
import img1 from '../Food_Logo2.png';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const RestaurantDetails = () => {
    const { state } = useLocation();
    return (
        <>
            <div className="nav-bg-img">
                <nav>
                    <h2>Fried Chicken Restaurants</h2>
                    <Link to = {`/`}>Back To Home Page</Link>
                </nav> 
            </div>
            <div className='des-wrapper'>
                <div className='des-div'>
                    <img src={img1} alt='chicken' />
                    <div className='res-name-wrapper'>
                        <h1>{state.restaurant.name} Restaurant</h1>
                        <h3>Baghdad</h3>
                        <div className='des-card'>
                            <h4>Location: {state.restaurant.location}</h4>
                            <h4 className='rateColor'>Rate: ⭐️⭐️⭐️⭐️ {state.restaurant.range}</h4>
                        </div>
                    </div>
                </div>
                <div className='des-details-div'>
                    <div className='des-details-container'>
                        <h2>Welcome to <strong>{state.restaurant.name}</strong> restaurant, Where Fried Chicken Dreams Come True!</h2>
                        <p>
                            Savor the Crunch: Irresistible fried chicken, crispy perfection!<br></br>

                            Explore Bold Flavors: From classic to spicy, a taste adventure awaits.<br></br>

                            Unforgettable Delights: A food haven for chicken enthusiasts.

                            Join Us Today: Indulge in the ultimate fried chicken experience!<br></br>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default RestaurantDetails;