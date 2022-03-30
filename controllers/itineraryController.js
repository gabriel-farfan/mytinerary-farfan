const Itinerary = require("../models/Itinerary");

const itineraryController = {
  getAllItineraries: (req, res) => {
    Itinerary.find().populate("comments.userId", { fullName: 1 })
      .then((allItineraries) =>
        res.json({ success: true, response: allItineraries })
      )
      .catch((error) => res.json({ success: false, response: error }));
  },
  addNewItinerary: (req, res) => {
    const newItinerary = new Itinerary({ ...req.body });
    newItinerary
      .save()
      .then(() => res.json({ success: true }))
      .catch((error) => res.json({ success: false, response: error }));
  },
  getItineraryId: (req, res) => {
    Itinerary.findOne({ _id: req.params.id })
      .then((itinerary) => res.json({ success: true, response: itinerary }))
      .catch((error) => res.json({ success: false, response: error.message }));
  },

  deleteItinerary: (req, res) => {
    Itinerary.findOneAndDelete({ _id: req.params.id })
      .then(() => res.json({ success: true }))
      .catch((error) => res.json({ success: false, response: error.message }));
  },

  editItinerary: (req, res) => {
    Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
      .then(() => res.json({ success: true }))
      .catch((error) => res.json({ success: false, response: error.message }));
  },

  getItinerariesPerCity: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      let itinerary;
      let error = null;
      try {
        itinerary = await Itinerary.find({ cityId: id }).populate("comments.userId", { fullName: 1 })
      } catch (err) {
        error = err;
      }
      console.log(itinerary);
      res.json({
        response: error ? "error" : itinerary,
        success: error ? false : true,
        error: error,
      });
    } catch (err) {
      console.log(err);
    }
  },



  likeItinerary: async (req, res) => {
    const id = req.params.id
    const user = (req.user._id).toString()

    let itinerario
    let error = null
    let allItineraries
    
    try {
        itinerario = await Itinerary.findOne({ _id: id })
        let ciudadI = itinerario.cityId
        if (itinerario.likes.includes(user)) {
            await Itinerary.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
            allItineraries = await Itinerary.find({ cityId: ciudadI }).populate("comments.userId", { fullName: 1 })
            res.json({ success: true, response: allItineraries })
            
          } else {
            await Itinerary.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
            allItineraries = await Itinerary.find({ cityId: ciudadI }).populate("comments.userId", { fullName: 1 })
            res.json({ success: true, response: allItineraries })
            
        }
    } catch (err) {
        error = err
        res.json({ success: false, response: error })
    }
},



};

module.exports = itineraryController;
