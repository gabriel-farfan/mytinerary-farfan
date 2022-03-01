import React, {useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from 'axios'

import "./styles/App.css";
import Home from "./Home";
import Cities from "./Cities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DinamicCard from "./components/DinamicCard"
import CardPrueba from "./components/CardPrueba"

 
const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/StaticCard" element={<DinamicCard />} />
          <Route path="/CardPrueba" element={<CardPrueba />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
