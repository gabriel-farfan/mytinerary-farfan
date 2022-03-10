import React, {useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from 'axios'
import { connect } from "react-redux"
// import {useEffect} from "react"

import "./styles/App.css";
import Home from "./Home";
import Cities from "./Cities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DinamicCard from "./components/DinamicCard"
// import CardPrueba from "./components/CardPrueba"
// import CityDetailed from './components/DetailCard'
import Details from './components/CardDetails'


 
const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/DinamicCard" element={<DinamicCard />} />
          {/* <Route path="/CardPrueba" element={<CardPrueba />} /> */}
          {/* <Route path="/DetailCard/:id" element={<CityDetailed />} /> */}
          <Route path="/CardDetails/:id" element={<Details/>}/>

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
