import React, {useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux"
import userActions from './redux/actions/userActions';


import "./styles/App.css";
import Home from "./Home";
import Cities from "./Cities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DinamicCard from "./components/DinamicCard"
import Details from './components/CardDetails'
import SignUp from "./components/SignUp/signup";
import SignIn from "./components/SignUp/signin";


 
function App (props) {
  useEffect(() => {
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/DinamicCard" element={<DinamicCard />} />
          <Route path="/CardDetails/:id" element={<Details/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,
}

export default connect(null, mapDispatchToProps)(App);

