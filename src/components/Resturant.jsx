import React, { useState } from "react";
import { Link } from "react-router-dom";
import staticImage from "../images/res.png";
import deleteIcon from "../images/bin.png";

function ResLink({ child, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "black" }}>
      {child}
    </Link>
  );
}

function Resturant(props) {
  const { index, name, location, rate, onDelete, link } = props;
  const [currentRate, setCurrentRate] = useState(rate);

  const increaseRate = () => {
    setCurrentRate((prevRate) => prevRate + 1);
  };

  const decreaseRate = () => {
    setCurrentRate((prevRate) => Math.max(prevRate - 1, 0));
  };
  

  return (
    <>
      <div className="restaurant" key={index}>
        <ResLink child={<img src={staticImage} alt="" />} link={link} />

        <div className="name-del">
          <ResLink
            child={
              <div className="name-loc">
                <h2>{name}</h2>
                <p>{location}</p>
              </div>
            }
            link={link}
          />
          <img src={deleteIcon} alt="" onClick={onDelete} />
        </div>

        <div className="rate">
          <h2 onClick={increaseRate}>+</h2>
          <h2>{currentRate}</h2>
          <h2 onClick={decreaseRate}>-</h2>
        </div>
      </div>
    </>
  );
}

export default Resturant;
