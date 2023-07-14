import React from "react";
import { FootballTopsList } from "../helpers/FootballTopsList";
import FootballTopsItems from "../components/FootballTopsItems";
import "../styles/FootballTops.css";

function FootballTops() {
  return (
    <div className="FootballTops">
      <h1 className="FootballTopsTitle">Football Tops</h1>
      <div className="FootballTopsList">
        {FootballTopsList.map((footballTopsItems, key) => {
          return (
            <FootballTopsItems
              key={key}
              image={footballTopsItems.image}
              name={footballTopsItems.name}
              price={footballTopsItems.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FootballTops;