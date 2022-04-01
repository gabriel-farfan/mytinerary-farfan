const Router = require('express').Router();
const validator = require('../config/validator')
const ciudadesController = require('../controllers/ciudadesController')
const itineraryController = require('../controllers/itineraryController')
const usersControllers = require('../controllers/userControllers')
const activityController = require('../controllers/activityController')
const commentsController = require('../controllers/commentsController')
const passport = require('../config/passport')

const { obtenerCiudades, cargarCiudad, borrarCiudad, getOneCity } = ciudadesController // llama "obtener ciudades" desde el controlador mediante el require

const { getAllItineraries, addNewItinerary, getItineraryId, deleteItinerary, editItinerary, getItinerariesPerCity, likeItinerary } = itineraryController

const { signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken } = usersControllers

const { getActivitiesPerItinerary, editActivity, addNewActivities, deleteActivity, getOneActivity, getAllActivities } = activityController

const { addComment, modifyComment, deleteComment } = commentsController

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


// ----------------- NUEVOS ----------------

Router.route("/itinerary/:id")
    .get(getItineraryId)
    .delete(deleteItinerary)
    .put(editItinerary)


//  ------ USERS ------

Router.route('/auth/signUp')
    .post(validator, signUpUsers)

Router.route('/auth/signIn')
    .post(signInUser)

Router.route('/auth/signOut')
    .post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
    .get(verifyEmail) //LLAMA A FUNCION DE VERIFICACIION

Router.route('/auth/signInToken')
    .get(passport.authenticate('jwt', { session: false }), verificarToken)




//  ------ ACTIVITIES ------


Router.route('/activities/:id')
    .get(getActivitiesPerItinerary)

Router.route('/activities')
    .post(addNewActivities)
    .get(getAllActivities)

Router.route('/activity/:id')
    .get(getOneActivity)
    .delete(deleteActivity)
    .put(editActivity)


//  ------ LIKES ------


Router.route("/itinerary/like/:id")
    .put(
        passport.authenticate('jwt', { session: false }), likeItinerary
    )

//  ------ COMMENTS ------


Router.route("/itinerary/comments")
    .post(passport.authenticate("jwt", { session: false }), addComment)
    
Router.route("/itinerary/comments/:id")
    .put(passport.authenticate("jwt", { session: false }), modifyComment)
    .delete(passport.authenticate("jwt", { session: false }), deleteComment)

module.exports = Router