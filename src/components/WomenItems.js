import React from "react";

function WomenItem({ image, name, price }) {
  return (
    <div className="WomenItems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default WomenItem;
//
