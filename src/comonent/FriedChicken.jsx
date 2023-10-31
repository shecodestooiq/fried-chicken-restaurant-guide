import React, { useState } from "react";
const FriedChicken = () => {
    const restaurantInfo = [
        { id: 1, name: "Friedchicken", location: "62 Street", rating: 4 },
        { id: 2, name: "KFC", location: "ALgadrya", rating: 5 },
        { id: 3, name: "Lees", location: "ALrubayee Street", rating: 3 },
        { id: 4, name: "Super Chicken", location: "Mansour", rating: 4.5 },
    ];
    const [restaurants, setRestaurants] = useState(restaurantInfo);
    const [newRestaurant, setnewRestaurant] = useState({
        name: "",
        location: "",
        rating: "",
    });

    const [updateRating, setupdateRating] = useState("");

    const handleAddRestaurant = () => {
        if (newRestaurant.name && newRestaurant.location && newRestaurant.rating) {
            const newId = restaurants.length + 1;
            const newRestaurantList = {
                id: newId,
                name: newRestaurant.name,
                location: newRestaurant.location,
                rating: parseFloat(newRestaurant.rating),
            };
            setRestaurants([...restaurants, newRestaurant]);
            setnewRestaurant({ name: "", location: "", rating: "" });
        }
    };
    const handleDeletRestaurant = (id) => {
        const updateRestaurants = restaurants.filter(
            (restaurant) => restaurant.id !== id
        );
        setRestaurants(updateRestaurants);
    };

    const handleChangeRating = (id) => {
        const updateRestaurants = restaurants.map((restaurant) =>
            restaurant.id === id
                ? { ...restaurant, rating: parseFloat(updateRating) }
                : restaurant
        );
        setRestaurants(updateRestaurants);
        setupdateRating("");
    };

    return (
        <div>
            <h1>Fried Chicken Restaurants</h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <strong>{restaurant.name}</strong> - {restaurant.location} - (Rating:
                        {restaurant.rating})
                        <button onClick={() => handleDeletRestaurant(restaurant.id)}>Delet</button>
                        <div>
                            <label>
                                New Rating:
                                <input
                                    type="number"
                                    step="0.1"
                                    value={updateRating}
                                    onChange={(e) => setupdateRating(e.target.value)}
                                />
                            </label>
                            <button onClick={() => handleChangeRating(restaurant.id)}>
                                Change Rating
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={newRestaurant.name}
                        onChange={(e) => setnewRestaurant({ ...newRestaurant, name: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        value={newRestaurant.location}
                        onChange={(e) => setnewRestaurant({ ...newRestaurant, location: e.target.value })}
                        required
                    />
                </label>
                <label>
                    Rating:
                    <input
                        type="number"
                        step="0.1"
                        value={newRestaurant.rating}
                        onChange={(e) => setnewRestaurant({ ...newRestaurant, rating: e.target.value })}
         
                        required
                    />
                </label>
                <button onClick={handleAddRestaurant}>Add Restaurant</button>
            </div>
        </div>
    );
};


export default FriedChicken;
