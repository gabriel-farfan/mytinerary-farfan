import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import LogoUsr from "../img/logousr.svg";
import "../styles/Navbar.css";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

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
        <Link to="/about"> Cities </Link>
        <img className="logousr" src={LogoUsr} />
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
