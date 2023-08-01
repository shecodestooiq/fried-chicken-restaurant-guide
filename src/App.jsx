import React, { useState } from 'react';
import './App.css';
import Resturant from './components/Resturant';
import StarRating from './components/StarRating';
import FriedChicken from './image/fried-chicken.png'
import Run from './image/run.png'
import Background from './image/background.png'

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [restList, setRestList] = useState([]);

  const addRest = (e) => {
    e.preventDefault();
    if (name && address && description && rate) {
      setRestList([...restList,
      { name: name, address: address, description: description, rate: rate }]);
      setName('');
      setAddress('');
      setDescription('');
      setRate('');
      alert('Thanks for your help :)');
    } else {
      alert('Please fill in all fields before adding a restaurant.');
    }
  }

  const handleDelete = (restaurantName) => {
    const updatedList = restList.filter(
      (restaurant) => restaurant.name !== restaurantName
    );
    setRestList(updatedList);
  };

  return (
    <>
      <div className="App">
        <header className='header'>
          <img className='imageright' src={FriedChicken} alt="Fried Chicken" />
          <h3> Let's help Mohammed to Find the best Fried Chicken resturnt in the town <br></br> Add Your fav. resturant now :) </h3>
          <img className='imageLeft' src={Run} alt='Image' />
        </header>
<div className="main">
<form>
          <label> Resturant Name </label>
          <input type="text" id='name' placeholder="Lee's" onChange={(e) => {
            setName(e.target.value)
          }} />
        </form>

        <form>
          <label> Address  </label>
          <input type="text" id='location' placeholder="Al-jadreyah - Baghdad" onChange={(e) => {
            setAddress(e.target.value)
          }} />
        </form>

        <form>
          <label> Description  </label>
          <textarea id='description' placeholder="Describe the Restaurant here" onChange={(e) => {
            setDescription(e.target.value)
          }} />
        </form>

        <form>
          <label> Rate  </label>
          {/* <input type="number" id='rate' min={0} max={5} onChange={(e) => {
            setRate(e.target.value)
          }} /> */}
          <StarRating rating={rate} onRate={setRate} />
        </form>
        <form>
          <button onClick={addRest}> Add your Suggest </button>
        </form>

</div>
        


      </div>
      <div className="showResturants">
        {restList.map((resturant) => {
          return < Resturant name={resturant.name} address={resturant.address} description={resturant.description} rate={resturant.rate} onDelete={handleDelete} />;
        })}
      </div>

<div>
  <img className='background' src={Background} alt="" />
</div>
    </>);
}

export default App;
