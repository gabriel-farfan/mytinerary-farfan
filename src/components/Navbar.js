import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";
import Logo from "../img/Air-Plane-icon.png";
import LogoUsr from "../img/logousr.svg";
import "../styles/App.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <a href="/">
          <img className="logo-navbar" src={Logo} />
        </a>
        <p style={{ fontWeight: "bold" }}>MyTinerary</p>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Cities"> Cities </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Cities"> Cities </Link>
        <Link to="/signup"> 
          <img className="logousr" src={LogoUsr}  />
        </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
