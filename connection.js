const mongoose = require("mongoose");
const url = require("./models/url");
require('dotenv').config();

const MONGO_URL = "mongodb://localhost:27017/"
async function Connection(url ){
    return  mongoose.connect(MONGO_URL)
}
module.exports = {
    Connection
}