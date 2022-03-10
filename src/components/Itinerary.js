// import * as React from 'react';
import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import { getAllItineraries } from '../apiCalls'



export default function ItineraryCard() {
  const [ItineraryData, setItineraryData] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:4000/api/itineraries`).then((response) => {
      setItineraryData(response.data.response.itinerary);
      console.log(ItineraryData);
    });
  }, []);


  return (
    // Search section

    <div className="cardMain">
      
      {/* Display de CARDS */}

      {ItineraryData.map((itinerary) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={process.env.PUBLIC_URL + `./images/${itinerary.image}`}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <p>{itinerary.title}</p>
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                <p>{city.description}</p>
              </Typography> */}
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
            <LinkRouter to={`/DetailCard/${city.id}`}>
              <Button size="medium" color="primary">
                View More!
              </Button>
            </LinkRouter>
          </CardActions> */}
          <CardActions>
            <LinkRouter to={`/CardDetails/${itinerary._id}`}>
              <Button size="small">View More!</Button>
            </LinkRouter>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}