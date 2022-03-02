import React from "react";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from 'react-router-dom'
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../styles/App.css";
// import DinamicCard from "./DinamicCard"
import { getAllCities } from '../apiCalls'

export default function CityDetailed() {
  const { id } = useParams();
  const [detailCity, setDetailCity] = React.useState([]);
  // let card = "";
  React.useEffect(() => {
    getAllCities()
      .then(response => {
      setDetailCity(response.data.response.ciudades).filter(city => city.id == id);
      console.log(detailCity);
    });
  }, []);

  

  return (
    <div>
      <h1>Page Under Construction</h1>
      <h2>Please Come Later</h2>
      <a href="/">Return to Main Page</a>
      {/* <Card sx={{ maxWidth: 345 }}>
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
              <Typography variant="body2" color="text.secondary">
                <p>{city.description}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          </CardActions>
        </Card> */}
      </div>
  );
}
