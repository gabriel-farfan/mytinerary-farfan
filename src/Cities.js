import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
import "./styles/App.css";
import DinamicCard from "./components/DinamicCard";

export default function Mycities() {
  return (
    <div className="cities-main">
      <div className="citiesTop"></div>
      <div className="citiesBottom">
        <h1> My Cities</h1>
        <p>Search your next destination:</p>
      </div>
      <DinamicCard />
    </div>
  );
}
