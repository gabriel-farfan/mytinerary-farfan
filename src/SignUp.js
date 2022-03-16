import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
import "./styles/App.css";
import DinamicCard from "./components/DinamicCard";
import Signup from "./components/signup";


export default function Contact() {
  return (
    <div className="cities-main">
      <div className="citiesTop"></div>
      <div className="citiesBottom">
        <h1> SIGNUP</h1>
      </div>
      <Signup />

    </div>
  );
}
