//create a mongodb schema 

const mongoose = require("mongoose");

var schema = new mongoose.Schema({   //This Is Very Simple mongodb model or Schema
    
    depname:{
        type:String,
        required:true
    },
    roomno:{
        type:String,
        required:true
    },
    question1:{
        type: String,
        required: true

    },
    question2:{
        type: String,
        required: true
    },
    question3:{
        type: String,
        required: true
    },
    question4:{
        type: String,
        required: true   
    },
    comment:{
        type:String,
        required:true
    }

})

const Commentdb = mongoose.model('commentdb', schema);          //userdb is document namidha wanta barbadne galchu ni dandenya.

module.exports = Commentdb;