const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxlength : 50
    },
    email: {
        type:String,
        minlength : 5
    },
    lastname:{
        type:String,
        maxlength : 50
    },
    role:{
        type:Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp:{
        type : Number
    }
})

const User = mongoose.model('User', userSchema)
//다른곳에서도 쓸수 있게
module.exports = {User}