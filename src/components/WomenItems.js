import React from "react";

function WomenItems({ image, name, price }) {
  return (
    <div className="WomenItems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default WomenItems;
//
