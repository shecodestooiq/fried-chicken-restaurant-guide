import React from "react";
import icon from '../images/nuggets (1).png'


function Motto() {
  return (
    <div className="motto">
      <div className="motto-text">
        <h1>
          Chick it Out! Your Cluckin' Good Guide to Fried Chicken Delights.
        </h1>
      </div>
      <p>all your favorite Fried Chicken Resturants in one place</p>
      <img src={icon} alt="" />
    </div>
  );
}

export default Motto;
