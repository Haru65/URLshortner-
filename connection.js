const mongoose = require("mongoose");
const url = require("./models/url");

async function Connection(url){
    return  mongoose.connect(url)
}
module.exports = {
    Connection
}