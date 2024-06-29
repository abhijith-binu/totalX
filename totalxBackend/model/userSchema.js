const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    }, 
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    }
    })
    const users= new mongoose.model('users',userSchema)
    // export model
    module.exports = users;