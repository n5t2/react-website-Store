import React from "react";

function KidsItems({ image, name, price }) {
  return (
    <div className="KidsItems">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> £{price} </p>
    </div>
  );
}

export default KidsItems;
//