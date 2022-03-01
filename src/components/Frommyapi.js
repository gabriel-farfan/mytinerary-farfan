import React, { useEffect, useState } from "react";
import {
  getAllCities,
  cargarDatos,
  eliminarCiudad,
  modificarCiudad,
} from "../apiCalls";

export default function FromMyApi() {
  const [cities, setCities] = useState();
  const [reload, setReload] = useState(false);
  const [modid, setModId] = useState();

  function deleteCiudad(id) {
    eliminarCiudad(id);
    setReload(!reload);
  }
  const modificarDB = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    var dataInput = {
      nombre: data.get("Ciudad"),
      pais: data.get("Pais"),
      descripcion: data.get("Descripcion"),
    };

    modificarCiudad(modid, dataInput);
    setReload(!reload);
    console.log(dataInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(data);
    var dataInput = {
      ciudad: data.get("Ciudad"),
      pais: data.get("Pais"),
      descripcion: data.get("Descripcion"),
    };

    cargarDatos(dataInput);
    setReload(!reload);
  };

  useEffect(() => {
    getAllCities().then((response) =>
      setCities(response.data.response.ciudades)
    );
  }, [reload]);

  return (
    <div>
      <div>
        {cities?.map((city) => (
          <ul>
            <li>
              {city.nombre}, {city.pais}, {city.descripcion}
              <div>
                <div>
                  <button onClick={() => deleteCiudad(city._id)}>DELETE</button>
                </div>
                <div>
                  <button onClick={() => setModId(city._id)}>Modifi</button>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
      {/* <div>
        <h1>POST DATOS CITIES</h1>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Ciudad"
                    name="Ciudad"
                    required
                    fullWidth
                    id="Ciudad"
                    label="Ciudad"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Pais"
                    label="Pais"
                    name="Pais"
                    autoComplete="Pais"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Descripcion"
                    label="Descripcion"
                    name="Descripcion"
                    autoComplete="Descripcion"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SEND DATA
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
      <div>
        <h1>MODIFICAR DATOS DESDE FRONT END EN DB</h1>

        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={modificarDB}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Ciudad"
                    name="Ciudad"
                    required
                    fullWidth
                    id="Ciudad"
                    label="Ciudad"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Pais"
                    label="Pais"
                    name="Pais"
                    autoComplete="Pais"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Descripcion"
                    label="Descripcion"
                    name="Descripcion"
                    autoComplete="Descripcion"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SEND DATA
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div> */}
  );
}
