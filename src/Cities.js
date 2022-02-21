import React from "react";
import "./styles/Cities.css";
import Footer from "./components/Footer";



function Mycities() {
  return (
    <div className="cities-main">
      <Footer />
      <div className="citiesTop"></div>
      <div className="citiesBottom">
        <h1> My Cities</h1>
        <p>Page Under Construction</p>
        <p>
          <a href="./Home.js">Come back to Home Page</a>
        </p>
      </div>
    </div>
  );
}

export default Mycities;
