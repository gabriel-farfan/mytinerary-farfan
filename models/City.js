const mongoose = require("mongoose");

const ciudadesSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  pais: { type: String, required: true },
  descripcion: { type: String, required: true },
});

const Ciudades = mongoose.model("cities", ciudadesSchema); // "cities " es la coleccion dentro de la DB

module.exports = Ciudades;
