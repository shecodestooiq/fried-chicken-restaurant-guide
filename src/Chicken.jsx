import { React, useState } from 'react';


function Chicken() {

    const [chicken, setChicken] = useState([{
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

    const [newChicken, setNewChicken] = useState({ name: '', rating: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setNewChicken({ ...newChicken, [name]: value }); //captures the name and value of input and uses them to update the newChicken state which is used to capture new data

    }

    function handleSubmit(e) {
        e.preventDefault();
        setChicken([...chicken, newChicken]); //spread operator that adds the newChicken list to the original chicken list, combining them
        setNewChicken({ name: '', rating: '' }) //empties the state that we use to capture new data so we can use it again
    }




    return (
        <div className="chicken-card">
            <h1>Resturant List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter Resturant name'
                    value={newChicken.name}
                    onChange={handleChange}></input>
                <select
                    name='rating'
                    value={newChicken.rating}
                    onChange={handleChange}>
                    <option value="">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option></select>
                <button type='submit'>Add Resturant</button>
            </form>

            {chicken.map((chicken, index) =>
            (<div className='rest-card'>
               <a href={`/${chicken.name}`}><h2>{chicken.name}</h2></a> 
                <h2>{chicken.rating}/5</h2>

            </div>
            ))}

        </div>
    );
}

export default Chicken;