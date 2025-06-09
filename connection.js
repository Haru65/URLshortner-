const mongoose = require("mongoose");
const url = require("./models/url");
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://adityakhandagale69:KR7Sm5bmUbgRMUwI@cluster0.0pq59kn.mongodb.net/";
async function Connection(url ){
    return  mongoose.connect(MONGO_URL)
}
module.exports = {
    Connection
}