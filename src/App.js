import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./Home";
import Cities from "./Cities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DinamicCard from "./components/DinamicCard"
 
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/StaticCard" element={<DinamicCard />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
