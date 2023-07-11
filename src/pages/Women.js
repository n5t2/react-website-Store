import React from "react";
import { WomenList } from "../helpers/WomenList";
import WomenItem from "../components/WomenItems.js";
import "../styles/Women.css";

function Women() {
  return (
    <div className="Women">
      <h1 className="WomenTitle">Latest in stock</h1>
      <div className="WomenList">
        {WomenList.map((menuItem, key) => {
          return (
            <WomenItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Women;