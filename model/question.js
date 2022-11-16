const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    id: String,
    soru: String,
    bircevap: String,
    ikicevap: String,
    uccevap: String,
    correctcevap:String,
    creatAt:{
        type: Date,
        default: new Date(),
    },
});

const Question = mongoose.model("Question", questionSchema);

module.exports =  Question ;