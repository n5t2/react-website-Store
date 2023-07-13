import React from "react";
import { KidsList } from "../helpers/KidsList";
import KidsItems from "../components/KidsItems";
import "../styles/Kids.css";

function Kids() {
  return (
    <div className="Kids">
      <h1 className="KidsTitle">Kids clothing</h1>
      <div className="KidsList">
        {KidsList.map((kidsItems, key) => {
          return (
            <KidsItems
              key={key}
              image={kidsItems.image}
              name={kidsItems.name}
              price={kidsItems.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Kids;