const Router = require('express').Router();

const ciudadesController = require('../controllers/ciudadesController')

const {obtenerCiudades, cargarCiudad, borrarCiudad}=ciudadesController // llama "obtener ciudades" desde el controlador mediante el require

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
module.exports = Router