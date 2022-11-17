const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    id: String,
    soru: String,
    cevap : Array,
    correctcevap:String,
    creatAt:{
        type: Date,
        default: new Date(),
    },
});

const Question = mongoose.model("Question", questionSchema);

module.exports =  Question ;