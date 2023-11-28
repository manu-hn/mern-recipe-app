const {Schema, model} = require('mongoose')


const UserSchema=new Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    fullName : {
        type : String,
        required : true,
    },
    email: {
        type: String ,
        required: true, 
        unique : true
    },

    mobile : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type:String,
        required :true,
    }
},{timestamps : true})

module.exports=new model('users', UserSchema)