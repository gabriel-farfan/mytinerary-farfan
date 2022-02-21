import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Calesita from "./components/Calesita";
// import Footer from "./components/Footer";



function Home() {
  return (
    <div className="main">
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Welcome To MyTinerary </h1>
        <p>
          "Find your perfect trip, designed by insiders who know and love their
          cities!".
        </p>
        <Link to="/Cities">
          <button> Enter! </button>
        </Link>
      </div>
      <div className="cities-text">
        <h3>Popular MYtineraries</h3>
      </div>
    </div>
  );
}

export default Home;
