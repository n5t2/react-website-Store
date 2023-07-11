import React from "react";
import Background from "../assets/Banner.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
         Hello there, we appericiate you visiting this website. We are a new store that openened and we specialise in designing and selling t-shirts. if there is any questions there is a form located on the contact me page.
        </p>
      </div>
    </div>
  );
}

export default About;
