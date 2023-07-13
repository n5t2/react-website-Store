import React from "react";

function FootballTopsItems({ image, name, price }) {
  return (
    <div className="FootballTopsItems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default FootballTopsItems;
//