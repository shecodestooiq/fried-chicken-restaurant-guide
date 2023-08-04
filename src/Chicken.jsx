import { React, useState } from 'react';
import ResturantInfo from './RestaurantInfo';
import {Link} from 'react-router-dom';


function Chicken() {

    const [restList, setRestList] = useState([{
        name: "KFC",
        rating: 4
    },
    {
        name: "McDonalds",
        rating: 3
    },
    {
        name: "Popeyes",
        rating: 4
    }]);

    const [newRestList, setnewRestList] = useState({ name: '', rating: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setnewRestList({ ...newRestList, [name]: value }); //captures the name and value of input and uses them to update the newRestList state which is used to capture new data

    }

    function handleSubmit(e) {
        e.preventDefault();
        setRestList([...restList, newRestList]); //spread operator that adds the newRestList list to the original restList list, combining them
        setnewRestList({ name: '', rating: '' }) //empties the state that we use to capture new data so we can use it again
    }




    return (
        <div className="restList-card">
            <h1>Resturant List</h1>
            <form onSubmit={handleSubmit}>
                <input
                id='rest-name'
                    type='text'
                    name='name'
                    placeholder='Enter Resturant name'
                    value={newRestList.name}
                    onChange={handleChange} required>
                    </input>
                <select 
                id='rating'
                    name='rating'
                    value={newRestList.rating}
                    onChange={handleChange} required>
                    <option value="">Select Rating</option>
                    <option id='value-one' value="1">1</option>
                    <option id='value-two' value="2">2</option>
                    <option id='value-three' value="3">3</option>
                    <option id='value-four' value="4">4</option>
                    <option id='value-five' value="5">5</option></select>
                <button id='add-button' type='submit'>Add Resturant</button>
            </form>

            {restList.map((oneRestaurant, index) =>
            (<div className='card-container'><Link to={`/restaurants/${oneRestaurant.name}`}> 
            <ResturantInfo restList={oneRestaurant}/>
            </Link></div>
            ))}

        </div>
    );
}

export default Chicken;