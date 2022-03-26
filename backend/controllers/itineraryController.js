const Itinerary = require("../models/Itinerary");

const itineraryController = {
  getAllItineraries: (req, res) => {
    Itinerary.find()
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
        itinerary = await Itinerary.find({ cityId: id });
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

  
  // -----------   NUEVOS  -----------

//   likeItinerary:async (req,res) =>{
//     const id=req.params.id //LLEGA POR PARAMETRO DESDE AXIOS
//     const user = req.user.id //LLEGA POR RESPUESTA DE PASSPORT

//    await  Itinerary.findOne({_id: id})

//     .then((itinerario) =>{
//         console.log(itinerario)
//         if(itinerario.likes.includes(user)){
//            Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})//PULL QUITA, SACA
//            .then((response)=> res.json({success:true, response:response.likes}))
//            .catch((error) => console.log(error))
//         }else{
//             Itinerary.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})//PUSH AGREGA
//             .then((response) => res.json({success:true, response:response.likes}))
//             .catch((error) => console.log(error))
//         }
//     })
//     .catch((error) => res.json({success:false, response:error}))
// },


  likeItinerary: async (req, res) => {
    const id = req.params.id
    const user = (req.user._id).toString()
    console.log('----------------IMPIMIENTO LA WEA -------------')
    console.log(user + 'USUARIOOOOOOOO')
    console.log(id + 'IDDDDDDDDDDDDDDD')

    let itinerario
    let error = null
    let allItineraries
    
    try {
        itinerario = await Itinerary.findOne({ _id: id })
        let ciudadI = itinerario.cityId
        console.log(itinerario + '-----------------')
        if (itinerario.likes.includes(user)) {
            await Itinerary.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
            allItineraries = await Itinerary.find({ cityId: ciudadI })
            console.log(allItineraries)
            res.json({ success: true, response: allItineraries })
            
          } else {
            await Itinerary.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
            allItineraries = await Itinerary.find({ cityId: ciudadI })
            console.log("-------------------PRUEBA ------------")
            console.log(allItineraries)
            res.json({ success: true, response: allItineraries })
            
        }
    } catch (err) {
        error = err
        res.json({ success: false, response: error })
    }
},

  
  modifyComment: async (req, res) => {
    switch (req.body.type) {
      case "addComment":
        try {
          let newComment = await Itinerary.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: { comment: req.body.comment, userId: req.user._id } } }, { new: true }).populate("comments.userId")
          if (newComment) {
            res.json({ success: true, response: newComment.comments })
          } else {
            throw new Error()
          }
        } catch (error) {
          res.json({ success: false, response: error })
        }

        break
      case "editComment":
        try {
          let updatedComment = await Itinerary.findOneAndUpdate({ "comments._id": req.params.id }, { $set: { "comments.$.comment": req.body.comment } }, { new: true })
          if (updatedComment) {
            res.json({ success: true, response: updatedComment.comments })
          } else {
            throw new Error()
          }
        } catch (error) {
          res.json({ success: false, response: error.message })
        }
        break
      case "deleteComment":
        try {
          let commentDeleted = await Itinerary.findOneAndUpdate({ "comments._id": req.body.commentId }, { $pull: { comments: { _id: req.body.commentId } } })
          if (commentDeleted) {
            res.json({ success: true })
          } else {
            throw new Error()
          }
        } catch (error) {
          res.json({ success: false, response: error })
        }
        break
    }
  }
};

module.exports = itineraryController;
