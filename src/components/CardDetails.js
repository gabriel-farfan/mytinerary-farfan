import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link as LinkRouter } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import axios from "axios";
import "../styles/App.css";
// import "../styles/App.css";
import { getAllCities } from "../apiCalls";
import {connect} from 'react-redux'

import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'


function Details(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(props.allCities.filter(city => city._id == id));
  const [dataPrueba, setDataPrueba] = useState([]) 

  useEffect(() => {
    if (props.allCities < 1) {
      props.getOneCity(id)
      .then(response => setDetailData(response))
    }

    props.getItinerariesPerCity(id)
    .then(response => setDataPrueba(response))


    // getAllCities().then((reply) => {
    //   // console.log(reply.data.response.ciudades.filter((city) => city._id == id));
    //   setDetailData(
    //     reply.data.response.ciudades.filter((city) => city._id == id)
    //   );
    // });
  }, []);

  if (!detailData) {
    return ( <h1> Loading... Please Wait </h1> )
  }


  return (
    <div className="card-detail-main">
      <div className="titleDetails">{detailData.map((city) => city.name)}</div>
      {console.log(props)}
      <div className="details-container">
        {detailData.map((city) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={process.env.PUBLIC_URL + `/images/${city.image}`}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{city.name}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>{city.description}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className="titleDetails">{detailData.map((city) => city.name)}</div>

      <a href="/">Return to Main Page</a>

      {/* ITINERARY ------------------------------------ */}

      <div className="details-container">
          {dataPrueba.length? (

            dataPrueba.map((itinerary) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={process.env.PUBLIC_URL + `/images/${itinerary.src}`}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <p>{itinerary.title}</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>{itinerary.description}</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          ) : ( <h1> There's no itineraries for this city yet. Come back soon! </h1> )}

        
      </div>
    </div>
  );
}

const mapStateToProps = (state ) => {
  return {
  allCities : state.citiesReducer.allCities,
  itineraries : state.itinerariesReducer.allCities,
  auxiliar : state.itinerariesReducer.allCities,
  }
}

const mapDispatchToProps = {
  getCities : citiesActions.getCities,
  getOneCity: citiesActions.getOneCity,
  getItinerariesPerCity : itinerariesActions.getItinerariesPerCity,
  getAllItineraries: itinerariesActions.getAllItineraries,
}




export default connect (mapStateToProps, mapDispatchToProps)(Details)