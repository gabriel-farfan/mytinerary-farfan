import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cityinfo from "./cityinfo";
import "../styles/App.css";


// var windowWidth = $(window).width();

// if(windowWidth <= 768) {
//   $('.demo-slider').slick({
//     vertical: false,
//   });
// } 
// else {
//   $('.demo-slider').slick({
//     vertical: true,
//   });
// }

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      speed: 1000,
      cssEase: "linear"
    };
    return (
      <>
      <div className="sliderContainer">
        <Slider {...settings}>
        {cityinfo.map(city =>
        <div className="cardSlide">
            <img src={process.env.PUBLIC_URL + `./images/${city.image}`}/>
            <h3>{city.name}</h3>
        </div>

        )}
        </Slider>
      </div>
      </>
    );
  }
}