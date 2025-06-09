const mongoose = require("mongoose");
const url = require("./models/url");
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://adityakhandagale69:KR7Sm5bmUbgRMUwI@cluster0.0pq59kn.mongodb.net/";
async function Connection(url ){
    return  mongoose.connect(MONGO_URI)
}
module.exports = {
    Connection
}