const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({

    name: { type: String },
    photo: { type: String },
    itineraryId: { type: mongoose.Types.ObjectId, ref: 'itinerary' }
})

const Activity = mongoose.model('activities', activitySchema)

module.exports = Activity