 import React, { useState } from "react";
import lees from '../assets/lees.jpg'
import chicken from '../assets/chicken.jpg'
import kfc from '../assets/kfc.jpg'
export default function Resturants() {
  const [resturant, setResturant] = useState([
    {
      no: 1,
      name: "Lee's",
      location: "Jadriya-Baghdad",
      image:lees,
      rate: 5
    },
    {
      no: 2,
      name: "KFC",
      location: "Jadriya-Baghdad",
      image:kfc,
      rate: 5
    },
    {
      no: 3,
      name: "Foodland",
      location: "Jadriya-Baghdad",
      image:chicken,
      rate: 4
    }
  ]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rate, setRate] = useState("");

  function changeName(event) {
    setName(event.target.value);
  }
  function changeLocation(event) {
    setLocation(event.target.value);
  }
  function changeRate(event) {
    setRate(event.target.value);
  }


  const addNewResturant = () => {
    setResturant((preInputs) => [
      ...preInputs,
      {
        no: resturant.length + 1,
        name: name,
        location: location,
        rate: rate
      }
    ]);
    setName("");
    setLocation("");
    setRate("");
  };

  const deleteRestaurant = (no) => {
    setResturant((preInputs) => {
      return preInputs.filter((rest) => rest.no !== no);
    });
  };

  const updateRate = (no) => {
    setResturant((preInputs) => {
      return preInputs.map((rest) => {
        if (rest.no === no) {
          return { ...rest, rate: rate };
        }
        return rest;
      });
    });
  };

  return (
    <div>
      <div className="header" >
        <div className="toheader" >
          <h1>Resturants guide</h1>
          <br />
          <br />
          <h2>
            Let's help Mohammed  <br/>
            find the best
            <br/> Fried Chiken Resturant in Baghdad
          </h2>
        </div>
      </div>

      <div className="resturantsList">
        <h3>
          Here are a list of some public resturants, please add the best ones :){" "}
        </h3>
      </div>
      <div className="restlist">
        <ul className="restcards">
          {resturant.map((rest, index) => (
            <li className="card" key={index}>
              <h3>{rest.name}</h3>
              <br />
              <img src={rest.image} alt="pic" />             
              <br />
              <h4>Location: {rest.location}</h4>
              <h4>⭐️⭐️⭐️⭐️⭐️{rest.rate}</h4>
              <div className="cardButton">
                <button onClick={() => deleteRestaurant(rest.no)}>
                  Delete
                </button>
                <button onClick={() => updateRate(rest.no)}>Change Rate</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="myform">
        <div className="restform">
          <input
            name="name"
            value={name}
            onChange={changeName}
            placeholder="Resturant name"
          />
          <input
            type="text"
            name="location"
            value={location}
            onChange={changeLocation}
            placeholder="Location"
          />
          <label htmlFor="range">Rate the restaurant from 1 to 5:</label>
          <input
            className="slider"
            type="range"
            value={rate}
            onChange={changeRate}
            min="0"
            max="5"
          />
          <button className="AddButton" onClick={addNewResturant}>
            Add New Restaurant
          </button>
        </div>
      </div>
      <div className="footer">
        <div>
          <h2>Enjoy with your meal 🍗🍗</h2>
        </div>
      </div>
    </div>
  );
}
