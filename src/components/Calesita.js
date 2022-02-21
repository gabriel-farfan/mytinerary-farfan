import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cityinfo from "./cityinfo";
import "../styles/Calesita.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
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

//  -------   CARROUSEL UNA LINEA

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/bundle";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "../styles/Calesita.css";

// import { Pagination, Navigation, Autoplay } from "swiper";
// import cityinfo from "./cityinfo"

// export default function Calesita() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         slidesPerGroup={4}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         // autoplay={{
//         //   delay: 5000,
//         //   disableOnInteraction: false,
//         // }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//         >

//         {cityinfo.map(city =>
//         <SwiperSlide>
//             <img src={process.env.PUBLIC_URL + `./images/${city.image}`}/>
//             <h3>{city.name}</h3>
//         </SwiperSlide>

//         )}

//       </Swiper>
//     </>
//   );
// }

//  -------   CARROUSEL DOS LINEAS

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "../styles/Calesita.css";

// import { Grid, Pagination, Navigation } from "swiper";
// import cityinfo from "./cityinfo"

// export default function Calesita() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={2}
//         grid={{
//           rows: 2,
//         }}
//         slidesPerGroup={2}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         hashNavigation={{
//           watchState: true,
//         }}
//         navigation={true}
//         modules={[Grid, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {cityinfo.map((city) => (
//           <SwiperSlide>
//             <img src={process.env.PUBLIC_URL + `./images/${city.image}`} />
//             <h3>{city.name}</h3>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
