import "./App.css";
import ResturantPage from "./components/ResturantPage";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import intialResturants from "./components/ResturantData";

import React, { useState } from "react";
import ResturantDetails from "./components/ResturantDetails";


function App() {
  const [updatedResturants, setUpdatedResturants] = useState(intialResturants);

  const addResturant = (newRestaurant) => {
    setUpdatedResturants([
      ...updatedResturants,
      { ...newRestaurant, link: `/${newRestaurant.name}` },
    ]);
  };

  const deleteRestaurant = (index) => {
    const updatedList = updatedResturants.filter((_, i) => i !== index);
    setUpdatedResturants(updatedList);
  };

  // console.log(updatedResturants);


  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route
              path="/"
              element={
                <ResturantPage
                  updatedResturants={updatedResturants}
                  addResturant={addResturant}
                  deleteRestaurant={deleteRestaurant}
                />
              }
            />

            {updatedResturants.map((res, index) => {
              return (
                <Route
                  key={index}
                  path={`/${res.link}`}
                  element={
                    <ResturantDetails
                      key={index}
                      name={res.name}
                      location={res.location}
                      rate={res.rate}
                    />
                  }
                />
              );
            })}
            
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
