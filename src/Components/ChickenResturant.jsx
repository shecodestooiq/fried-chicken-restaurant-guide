import { React, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Restaurant = ({ name, location, rating, onDelete, index, restaurants, setRestaurants, handleRatingChange, detailsPage }) => {
  const handleDelete = () => {
    onDelete(index);
  };
  //change rating 
  // Setting up a newRating state to track the input
  const [newRating, setNewRating] = useState("");

  // This function is called when the user submits the form
  const handleRatingSubmit = (e) => {
    e.preventDefault();

    // Convert the newRating from text to a number
    const updatedRating = parseFloat(newRating);

    // Create a copy of the restaurants array 
    // the content of resturants array will all be copied to updatedRating
    const updatedRestaurants = [...restaurants];

    // Update the rating of the specific restaurant at the given index
    updatedRestaurants[index].rating = updatedRating;

    // Update the state of restaurants with the updated array
    setRestaurants(updatedRestaurants);

    // Reset the newRating state to make the input field empty
    setNewRating("");
  };


  return (
    <div className="restaurant">
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <p>Rating: {rating}</p>
      {/* Display the rating change form */}
      <form onSubmit={handleRatingSubmit}>
        <label>
          New Rating:
          <input
            type="number"
            step="0.1"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          />
        </label>
        <button className='btn'
          type="submit"
          onClick={(e) => handleRatingSubmit(e, index)}>Change Rating</button>
      </form>
      <button className='btn' onClick={handleDelete}>Delete</button>
      <Link to="/DetailsPage" className="nav-item">Details Page</Link>
    </div>
  );
};



export default Restaurant;


