import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RestaurantsList from './components/RestaurantsList';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantDetails from './components/RestaurantDetails';
import Nav from './components/Nav';

function App() {
  const [restaurant, setRestaurant] = useState([
    {
      id: 1,
      name: 'FireFly',
      location: 'Yarmouk',
      range: 90,
    },
    {
      id: 2,
      name: 'Foodland',
      location: 'Harthyia',
      range: 30,
    },
    {
      id: 3,
      name: 'Yumyum',
      location: 'Saydia',
      range: 80,
    },
  ]);
  

  return (
    <>
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Nav />
              <Header />
              <RestaurantsList restaurant={restaurant} setRestaurant={setRestaurant}/>
              <Footer />
            </>}
        />
        <Route
          exact path='/restaurant-details/:id'
          element={
            <>
              <RestaurantDetails restaurant={restaurant} />
              <Footer />
            </>}
        />
      </Routes>
    </>
    
  );
}

export default App;
