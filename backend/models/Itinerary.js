const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    userName:{type:String, required:true},
    // userName: {type:mongoose.Types.ObjectId, ref:'user'},
    userPhoto:{type:String, required: true},
    src:{type:String, required:true},
    hashtags:{type: Array, required: true},
    title:{type: String, required:true},
    price:{type: Number, required:true},
    likes:{type: Array, default: []},
    description:{type:String, required:true},
    time:{type:Number},
    comments: [{
        comment:{type:String},
        userId:{type:mongoose.Types.ObjectId, ref:'users'}
    }],
    cityId:{type:String, required:true}
})  

const Itinerary = mongoose.model('itineraries', itinerarySchema)

module.exports=Itinerary