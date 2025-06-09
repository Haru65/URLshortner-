const mongoose = require("mongoose");
const url = require("./models/url");
const MONGO_URI = process.env.MONGO_URI || "mongo://mongodb:27017/shortUrl";
async function Connection(url ){
    return  mongoose.connect(MONGO_URI)
}
module.exports = {
    Connection
}