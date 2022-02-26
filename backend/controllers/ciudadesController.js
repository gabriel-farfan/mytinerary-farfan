const Ciudades = require("../models/ciudades");

const ciudadesControllers = {

  obtenerCiudades: async (req, res) => {
    let ciudades;
    let error = null;
    try {
      ciudades = await Ciudades.find();
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "ERROR" : { ciudades },
      success: error ? false : true,
      error: error,
    });
  },

  cargarCiudad: async (req, res) => {
    console.log();
  }
};
module.exports = ciudadesControllers;
