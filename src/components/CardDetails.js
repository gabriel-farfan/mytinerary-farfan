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
// import DinamicCard from "./DinamicCard"
import { getAllCities } from "../apiCalls";


export default function Details() {
  const [detailData, setDetailData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAllCities().then((reply) => {
      console.log(reply.data.response.ciudades.filter((city) => city._id == id));
      setDetailData(reply.data.response.ciudades.filter((city) => city._id == id));
    });
  }, []);


  return (
    <div className="card-detail-main">
      <div className="titleDetails">{detailData.map((city) => city.name)}
      </div>
      <h1>Page Under Construction</h1>
        <h2>Please Come Later</h2>
        <a href="/">Return to Main Page</a>

      <div className="details-container">
        {detailData.map((city) => (
          <Card sx={{ maxWidth: 345 }}>
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
          
        </Card>
        ))}
      </div>
    </div>
  );
}
