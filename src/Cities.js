import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
import "./styles/App.css";
import StaticCard from "./components/StaticCard";
// import CardPrueba from "./components/CardPrueba";

export default function Mycities() {

  return (
    <div className="cities-main">
      <div className="citiesTop"></div>
      <div className="citiesBottom">
        <h1> My Cities</h1>
        <p>Search your next destination:</p>
      </div>
      {/* <CardPrueba /> */}
      <StaticCard />
    </div>
  );
}
