// import * as React from 'react';
import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from 'react-router-dom'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import Alert from "./Alert";

export default function DinamicCard() {
  const [cityData, setCityData] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [Resultado, setResultado] = useState([]);
  const [AlertMessage, setAlert] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/allcities`).then((response) => {
      setCityData(response.data.response.ciudades);
      setResultado(response.data.response.ciudades);
    });
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    console.log(Resultado);
    var resultadosBusqueda = [];
    resultadosBusqueda.push(
      ...cityData.filter((elemento) =>
        elemento.name.toLowerCase().startsWith(terminoBusqueda.toLowerCase())
      )
    );

    if (resultadosBusqueda.length > 0) {
      setResultado(resultadosBusqueda);
      setAlert(false);
    } else if (resultadosBusqueda.length == 0 && terminoBusqueda != "") {
      setResultado(resultadosBusqueda);
      setAlert(true);
    } else {
      setResultado(cityData);
      setAlert(false);
    }
  };

  return (
    // Search section

    <div className="cardGeneral">
      <div className="input-main">
        <div className="containerInput">
          <input
            className="inputBuscar"
            value={busqueda}
            placeholder="Search Your City"
            onChange={handleChange}
          />
          <button className="btn btn-success"> ENTER </button>
        </div>
      </div>

      {/* Display de CARDS */}

      <Alert StateAlert={AlertMessage} />

      {Resultado.map((city) => (
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
              {/* <Typography variant="body2" color="text.secondary">
                <p>{city.description}</p>
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <LinkRouter to={`/DetailCard/${city.id}`}>
              <Button size="medium" color="primary">
                View More!
              </Button>
            </LinkRouter>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

// export default function StaticCard() {
//   return (

//     <div className="cardGeneral">
//         {cityinfo.map(city =>
//           <Card sx={{ maxWidth: 345 }}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="200"
//               image={process.env.PUBLIC_URL + `./images/${city.image}`}
//               alt=""
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 <p>{city.name}</p>
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 <p>{city.description}</p>
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               Share
//             </Button>
//           </CardActions>
//         </Card>
//         )}

//       </div>

//   );
// }
