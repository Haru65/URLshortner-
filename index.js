const express = require("express");
const route = require("./routes/url")
const {Connection} = require("./connection")
const url = require("./models/url")
const path = require ("path")
const router = express.Router();
const app = express();
const port = 800;
//middleware
app.use(express.json( ))
app.use(express.urlencoded({ extended: true }));
//connection 
Connection("mongodb://localhost:27017/shortUrl").then(console.log("mongodb connected"))

//ejs 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));



//routing
app.use("/",route)



app.listen(port,()=>{
    console.log("server started at 800")
})
