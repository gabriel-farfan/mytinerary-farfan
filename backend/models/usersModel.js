
const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    emailVerificado:{type:Boolean, required:true}, 
    image:{type:String, required:true}, 
    from:{type:Array},
    pais:{type:String, required:true}
    
})

const User = mongoose.model('users', userSchema)
module.exports = User