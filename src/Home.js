import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MultipleItems from "./components/Slider";


function Home() {
  return (
    <div className="home-main-container">
      <div className="home-background">
        <div className="headerContainer">
          <h1> Welcome To MyTinerary </h1>
          <p>
            Find your perfect trip, designed by insiders who know and love
            their cities!
          </p>
          <Link to="/Cities">
            <button> Enter! </button>
          </Link>
        </div>
      </div>
      <div className="cities-text">
        <h3>Popular MYtineraries</h3>
      </div>
      <MultipleItems />
    </div>
  );
}

export default Home;
