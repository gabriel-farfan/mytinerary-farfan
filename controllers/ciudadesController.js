// El controlador consulta al modelos de ciudades
// cada propiedad del objeto es una funcion

// const { TramRounded } = require("@mui/icons-material");
const Ciudades = require("../models/City");

const ciudadesController = {
  
  obtenerCiudades: async (req, res) => {
    let ciudades;
    let error = null;

    try {
      ciudades = await Ciudades.find(); // Respuesta positiva => devuelve lo que hay en ciudades
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "ERROR" : { ciudades }, // respuesta negativa => devuelve el error
      success: error ? false : true,
      error: error,
    });
  },

  cargarCiudad: async (req, res) => {
    console.log(req.body);
    const { ciudad, pais, descripcion } = req.body.dataInput;
    new Ciudades({ nombre: ciudad, pais: pais, descripcion: descripcion })
      .save()
      .then((respuesta) => res.json({ respuesta }));
  },

  borrarCiudad: async (req, res) => {
    const id = req.params.id;

    await Ciudades.findOneAndDelete({ _id: id });
  },
  
  modificarCiudad: async (req, res) => {
    const id = req.params.id;
    const ciudad = req.body.dataInput;
    let ciudadb = await Ciudades.findOneAndUpdate({ _id: id }, ciudad);
    console.log(ciudadb);
  },
  
  getOneCity: async (req, res) => {
    const id = req.params.id;
    
    let city
    let error = null
    try {
      city = await Ciudades.findOne({ _id: id})
    }
    catch (err) {
      error = err
    }
    res.json({
      response: error?'error' : city,
      success: error? false : true,
      error : error
    })
  }
};

module.exports = ciudadesController;
