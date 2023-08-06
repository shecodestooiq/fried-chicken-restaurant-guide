import React, { useState } from "react";
import Resturant from "./Resturant";
import Input from "./Input";
import intialResturants from "./ResturantData";

function ResturantPage(props) {
  const { updatedResturants, addResturant, deleteRestaurant } = props;

  return (
    <>
      <h1>Fried Chicken Guide Web App</h1>
      <Input onSubmit={addResturant} />

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
    </>
  );
}
// export { intialResturants };

export default ResturantPage;
