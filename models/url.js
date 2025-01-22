const mongoose = require("mongoose");

const schema = mongoose.Schema({
    ShortUrl:{
        type:String,
        unique:true,
        required:true
    },
    RedirectedUrl:{
        type:String,
        required:true
    },
    log:[{timestamp:{type:Number}}]

},
{timestamp:true})

const url = mongoose.model("url",schema)

module.exports = url