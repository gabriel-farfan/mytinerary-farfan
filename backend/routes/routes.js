const Router = require('express').Router();
const ciudadesController = require('../controllers/ciudadesController')
const itineraryController = require('../controllers/itineraryController')
const usersControllers = require('../controllers/userControllers')
// const activityController = require ('../controllers/activityController')


const {obtenerCiudades, cargarCiudad, borrarCiudad, getOneCity} = ciudadesController // llama "obtener ciudades" desde el controlador mediante el require
const {getAllItineraries, addNewItinerary, getItineraryId, deleteItinerary, editItinerary, getItinerariesPerCity} = itineraryController
const {signUpUsers, signInUser, signOutUser}= usersControllers

Router.route('/allcities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/allcities/:id')
.delete(borrarCiudad)
.get(getOneCity)
module.exports = Router

Router.route("/itineraries")
.get(getAllItineraries)
.post(addNewItinerary)

Router.route("/itineraries/:id")
.get(getItinerariesPerCity)

Router.route('/auth/signUp')
.post(signUpUsers)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)


// Router.route("/itinerary/:id")
// .get(getItineraryId)
// .delete(deleteItinerary)
// .put(editItinerary)

module.exports = Router