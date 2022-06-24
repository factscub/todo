const mangoose = require('mongoose')

const userSchema = new mangoose.Schema({
    userName :{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }

},
{ timestamps:true})

module.exports= mangoose.model('User', userSchema)