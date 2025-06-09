const express = require("express");
const route = require("./routes/url")
const {Connection} = require("./connection")
const url = require("./models/url")
const path = require ("path")
const router = express.Router();
const app = express();
const port = 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://adityakhandagale69:KR7Sm5bmUbgRMUwI@cluster0.0pq59kn.mongodb.net/";
//middleware
app.use(express.json( ))
app.use(express.urlencoded({ extended: true }));
//connection 
Connection(MONGO_URI).then(console.log("mongodb connected"))

//ejs 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));



//routing
app.use("/",route)



app.listen(port,()=>{
    console.log("server started at 800")
})
