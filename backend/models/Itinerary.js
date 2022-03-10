const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    userName:{type:String, required:true},
    userPhoto:{type:String, required: true},
    src:{type:String, required:true},
    hashtags:{type: Array, required: true},
    title:{type: String, required:true},
    price:{type: Number, required:true},
    likes:{type:Number},
    description:{type:String, required:true},
    time:{type:Number},
    comments: [{
        comment:{type:String},
        userId:{type:mongoose.Types.ObjectId, ref:'user'}
    }],
    cityId:{type:String, required:true}
})  

const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports=Itinerary