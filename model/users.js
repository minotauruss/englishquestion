const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id: String,
    name: String,
    point: String,
    creatAt:{
        type: Date,
        default: new Date(),
    },
});

const User = mongoose.model("User", userSchema);

module.exports =  User ;
