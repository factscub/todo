const mangoose = require('mongoose')

const postSchema = new mangoose.Schema({
    text:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    date:{
        type:String,
        unique:true
    },
    type:{
        type:String,
        required:true,

    },
    checked:{
        type:Boolean,
        default:false
    },
    owner:{
        type:String,
        required:true,
    }
   

},
{ timestamps:true}

)

module.exports= mangoose.model('Post', postSchema)