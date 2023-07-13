import React from "react";
import { FootballTopsList } from "../helpers/FootballTopsList";
import FootballTopsItems from "../components/FootballTopsItems";
import "../styles/Kids.css";

function FootballTops() {
  return (
    <div className="FootballTops">
      <h1 className="FootballTops">Football Tops</h1>
      <div className="FootballTopsList">
        {FootballTopsList.map((footballtopsItems, key) => {
          return (
            <FootballTopsItems
              key={key}
              image={footballtopsItems.image}
              name={footballtopsItems.name}
              price={footballtopsItems.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FootballTops;