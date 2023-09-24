import React, { useState } from "react";
import Resturant from "../components/Resturant";
import Input from "../components/Input";
import Cover from "../components/Cover";
import Motto from "../components/Motto";
import Nav from "../components/Nav";

function ResturantPage(props) {
  const { updatedResturants, addResturant, deleteRestaurant } = props;

  return (
    <>
      <Nav/>
      <Cover />
      <Motto />


      <Input onSubmit={addResturant} />
      <div className="resturants">
      {updatedResturants.map((res, index) => {
        return (
          <Resturant
            key={index}
            name={res.name}
            location={res.location}
            rate={res.rate}
            onDelete={() => deleteRestaurant(index)}
            link={res.link}
          />
        );
      })}
      </div>

      <Nav/>
    </>
  );
}
// export { intialResturants };

export default ResturantPage;
