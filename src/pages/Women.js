import React from "react";
import { WomenList } from "../helpers/WomenList";
import WomenItem from "../components/WomenItems";
import "../styles/Women.css";

function Women() {
  return (
    <div className="Women">
      <h1 className="WomenTitle">Female clothing</h1>
      <div className="WomenList">
        {WomenList.map((womenItem, key) => {
          return (
            <WomenItem
              key={key}
              image={womenItem.image}
              name={womenItem.name}
              price={womenItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Women;
//