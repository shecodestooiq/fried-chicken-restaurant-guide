import React from "react";
import staticImage from "../images/res.png";

function ResturantDetails(props) {
  const { name, location, rate } = props;
  return (
    <div className="res-details">
      <img src={staticImage} alt="" />
      <div className="res-info">
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2>{rate} stars</h2>
      </div>
    </div>
  );
}

export default ResturantDetails;
