import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Background.jpg.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Sports </h1>
        <p> Clothes to make you feel and lookm good</p>
        <Link to="/menu">
          <button> New in </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
//