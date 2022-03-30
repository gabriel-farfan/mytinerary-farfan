import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/App.css";
import axios from "axios";


export default function MultipleItems () {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    speed: 1000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/allcities`)
      .then((response) => setCityData(response.data.response.ciudades.slice(0, 12)));
    console.log(cityData)
  }, []);

  return (
    <>
      <div className="ContainerHorizontal" >
        <Slider {...settings} >
          {cityData.map(city => (
            <div className="cardSlide" key={city._id}>
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
