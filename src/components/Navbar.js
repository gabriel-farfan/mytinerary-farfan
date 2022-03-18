import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../img/Air-Plane-icon.png";
import LogoUsr from "../img/logousr.svg";
import "../styles/App.css";
import userActions from "../redux/actions/userActions";


function Navbar(props) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      {console.log(props.user)}
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img className="logo-navbar" src={Logo} />
        </Link>
        <p style={{ fontWeight: "bold" }}>MyTinerary</p>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Cities"> Cities </Link>
          {props.user ? (
            <Link to="/signup">
              <img className="logousr" src={props.user.image} />
            </Link>
          ) : (
            <Link to="/signup">
              <img className="logousr" src={LogoUsr} />
            </Link>
          )}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/Cities"> Cities </Link>
        {props.user ? (
            <Link to="/signup">
              <img className="logousr" src={props.user.image} />
            </Link>
          ) : (
            <Link to="/signup">
              <img className="logousr" src={LogoUsr} />
            </Link>
          )}
        {/* <Link to="/signup">
          <img className="logousr" src={LogoUsr} />
        </Link> */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  signOut: userActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);