import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
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
        <img src={Logo} />
        <p style={{ fontWeight: "bold" }}>MyTinerary</p>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Cities"> Cities </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Cities"> Cities </Link>
        <img className="logousr" src={LogoUsr} />
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
