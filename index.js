const express = require("express");
const route = require("./routes/url")
const {Connection} = require("./connection")
const url = require("./models/url")


const app = express();
const port = 800;
//middleware
app.use(express.json( ))

//connection 
Connection("mongodb://localhost:27017/shortUrl").then(console.log("mongodb connected"))


//routing
app.use("/",route)



app.listen(port,()=>{
    console.log("server started at 800")
})
