import React from "react";
import "./styles/App.css";
import StaticCard from "./components/StaticCard"


export default function Mycities() {
  return (
    <div className="cities-main">
      <div className="citiesTop">

      </div>
      <div className="citiesBottom">
        <h1> My Cities</h1>
        <p>Page Under Construction</p>
        <p>
          <a href="./Home.js">Come back to Home Page</a>
        </p>
      </div>
      <StaticCard />
    </div>
  );
}


