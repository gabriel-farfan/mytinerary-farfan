import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Calesita from "./components/Calesita";
import Footer from "./components/Footer";
// import { Slider } from "@material-ui/core";
// import { Slider } from "./components/Slider";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Calesita />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
