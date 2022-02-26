import React, {useEffect} from "react";
import TextField from '@mui/material/TextField';
import "./styles/App.css";
import StaticCard from "./components/StaticCard";


export default function Mycities() {
  
  return (
    <div className="cities-main">
      <div className="citiesTop">
      </div>
      <div className="citiesBottom">
        <h1> My Cities</h1>
        <p>Search your next destination:</p>
        <TextField id="outlined-basic" label="Search..." variant="outlined" />
        {/* <p>
          <a href="./Home.js">Come back to Home Page</a>
        </p> */}
      </div>
      <StaticCard />
    </div>
  );
}
