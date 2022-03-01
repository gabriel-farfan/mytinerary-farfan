// import * as React from 'react';
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import { getAllCities, loadData } from "../apiCalls";
// import cityinfo from "./cityinfo";


export default function StaticCard() {
    
  // const [data, setData] = useState()
    
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/api/allcities`)
  //     .then((reply) => setData(reply.data.response.ciudades));
  //     console.log(data);
  //   }, []);


  // function search(e) {
  //   filterSearch(e.target.value.trim());
  //   console.log(e.target.value);
  // }

  // function filterSearch(searchInput) {
  //   let result = [];
  //   result.push(
  //     ...data.filter((place) =>
  //       place.city.toLowerCase().startsWith(searchInput.toLowerCase())
  //     )
  //   );
  //   if (result.length > 0) {
  //     setData(result);
  //   } else {
  //     setData(data);
  //   }
  // }

  // return (
  //   <div className="cardGeneral">
  //     <div className="containerInput">
  //       <input
  //         className="form-control inputBuscar"
  //         value={busqueda}
  //         placeholder="Búsqueda por Nombre o Empresa"
  //         onChange={handleChange}
  //       />
  //       <button className="btn btn-success"></button>
  //     </div>
  //     {cityData.map((city) => (
  //       <Card sx={{ maxWidth: 345 }}>
  //         <CardActionArea>
  //           <CardMedia
  //             component="img"
  //             height="200"
  //             image={process.env.PUBLIC_URL + `./images/${city.image}`}
  //             alt=""
  //           />
  //           <CardContent>
  //             <Typography gutterBottom variant="h5" component="div">
  //               <p>{city.name}</p>
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               <p>{city.description}</p>
  //             </Typography>
  //           </CardContent>
  //         </CardActionArea>
  //         <CardActions>
  //           <Button size="small" color="primary">
  //             Share
  //           </Button>
  //         </CardActions>
  //       </Card>
  //     ))}
  //   </div>
  // );

}
