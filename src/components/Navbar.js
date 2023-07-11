import React, { useState } from "react";
import Logo from "../assets/Logo1.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Men"> Mens </Link>
        <Link to="/Women"> Women </Link>
        <Link to="/Kids"> Kids </Link>
        <Link to="/Offer"> Offers </Link>
        <Link to="/Football"> Football tops </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/Men"> Mens </Link>
        <Link to="/Women"> Women </Link>
        <Link to="/Kids"> Kids </Link>
        <Link to="/Offer"> Offers </Link>
        <Link to="/Football"> Football tops </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
