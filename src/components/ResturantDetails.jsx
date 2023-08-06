import React from "react";

function ResturantDetails(props) {
  const { name, location, rate } = props;
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default ResturantDetails;
