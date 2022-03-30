// import * as React from 'react';
import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import axios from "axios";
import Alert from "./Alert";
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'


function DinamicCard(props) {
  const [cityData, setCityData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [Resultado, setResultado] = useState([]);
  const [AlertMessage, setAlert] = useState(false);

  useEffect(() => {
    props.getCities()
    
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (e) => {
    let busqueda = e.target.value
    setBusqueda(e.target.value);
    props.filterCities (props.searchedCities, busqueda.trim())
    console.log(Resultado);
    

    if (props.allCities.length > 0) {
      setResultado(props.allCities);
      setAlert(false);
    } else if (props.allCities.length === 0 && busqueda !== "") {
      setResultado(props.allCities);
      setAlert(true);
    } else {
      setResultado(cityData);
      setAlert(false);
    }
  };

  if (!props.allCities) {
    return (
     <h1>esta cargando</h1> 
    )
  }

  return (
    // Search section

    <div className="cardGeneral">
      <div className="input-main">
        <div className="containerInput">
          <input
            className="inputBuscar"
            // value={busqueda}
            placeholder="Search Your City"
            onKeyUp={filtrar}
          />
          <button className="btn btn-success"> ENTER </button>
        </div>
      </div>

      {/* Display of CARDS */}

      <Alert StateAlert={AlertMessage} />

      {(props?.allCities).map((city) => (
        <Card sx={{ maxWidth: 345 }} key={city._id} >
          <LinkRouter to={`/CardDetails/${city._id}`}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={process.env.PUBLIC_URL + `./images/${city.image}`}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <p>{city.name}</p>
              </Typography>
              
            </CardContent>
          </CardActionArea>

          <CardActions>
            <LinkRouter to={`/CardDetails/${city._id}`}>
              <Button size="small">View More!</Button>
            </LinkRouter>
          </CardActions>
          </LinkRouter>
        </Card>
      ))}
    </div>
  );
}


const mapStateToProps = (state ) => {
  return {
  allCities : state.citiesReducer.allCities,
  searchedCities : state.citiesReducer.searchedCities,
  auxiliar : state.citiesReducer.auxiliar
  }
}

const mapDispatchToProps = {
  getCities : citiesActions.getCities,
  filterCities : citiesActions.filterCities,
  getOneCity: citiesActions.getOneCity,
}

export default connect (mapStateToProps, mapDispatchToProps)(DinamicCard)