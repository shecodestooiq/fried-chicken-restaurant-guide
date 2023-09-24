import React, { useState } from "react";
import Resturant from "../components/Resturant";
import Input from "../components/Input";
import intialResturants from "../components/ResturantData";
import Cover from '../components/Cover'

function ResturantPage(props) {
  const { updatedResturants, addResturant, deleteRestaurant } = props;

  return (
    <>
      <Cover />


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
