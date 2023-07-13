import React from "react";
import { MenList } from "../helpers/MenList";
import MenItem from "../components/MenItem";
import "../styles/Men.css";

function Men() {
  return (
    <div className="Men">
      <h1 className="MenTitle">Mens clothing</h1>
      <div className="MenList">
        {MenList.map((menItem, key) => {
          return (
            <MenItem
              key={key}
              image={menItem.image}
              name={menItem.name}
              price={menItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Men;
//