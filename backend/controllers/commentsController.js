const Itinerary = require('../models/Itinerary');


const itineraryController = {
addComment: async (req, res) => {
    console.log('PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    const { itineraryId, comment } = req.body.comment
    const user = req.user._id
    console.log('DATOSSSSSSSS')
    console.log(itineraryId, comment, user);
    try {
        const nuevoComment = await Itinerary.findOneAndUpdate({ _id: itineraryId }, { $push: { comments: { comment: comment, userId: user } } }, { new: true }).populate("comments.userId", { fullName: 1 })
        res.json({ success: true, response: { nuevoComment }, message: "Thanks for your Comment!" })
  
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Something went wrong" })
    }
  
  },
    
  
  modifyComment: async (req, res) => {
    const { itineraryId, comment } = req.body.comment
    const user = req.user._id
    try {
        const newComment = await Itinerary.findOneAndUpdate({ "comments._id": itineraryId }, { $set: { "comments.$.comment": comment } }, { new: true })
        console.log(newComment)
        res.json({ success: true, response: { newComment }, message: "Your comment has benn modified" })
  
    }
    catch (error) {
        console.log(error)
        res.json({ success: true, message: "Something went wrong" })
    }
  
  },
  
  
  deleteComment: async (req, res) => {
    const id = req.params.id
    const user = req.user._id
    try {
        const deleteComment = await Itinerary.findOneAndUpdate({ "comments._id": id }, { $pull: { comments: { _id: id } } }, { new: true })
        console.log(deleteComment)
        res.json({ success: true, response: { deleteComment }, message: "Comment Deleted" })
  
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Something went wrong" })
    }
  
  },
}

module.exports = itineraryController;