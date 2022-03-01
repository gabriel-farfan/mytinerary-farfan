import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/App.css";
import axios from "axios";

// export default class MultipleItems extends Component {
export default function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    speed: 1000,
    cssEase: "linear",
  };

  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/allcities`)
      .then((response) => setCityData(response.data.response.ciudades));
    // console.log(cityData)
  }, []);

  return (
    <>
      <div className="sliderContainer">
        <Slider {...settings}>
          {cityData.map((city) => (
            <div className="cardSlide">
              <img src={process.env.PUBLIC_URL + `./images/${city.image}`} alt={city.name} />
              <h3>{city.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 2,
//       autoplay: false,
//       speed: 1000,
//       cssEase: "linear"
//     };
//     return (
//       <>
//       <div className="sliderContainer">
//         <Slider {...settings}>
//         {cityinfo.map(city =>
//         <div className="cardSlide">
//             <img src={process.env.PUBLIC_URL + `./images/${city.image}`}/>
//             <h3>{city.name}</h3>
//         </div>

//         )}
//         </Slider>
//       </div>
//       </>
//     );
//   }
// }
