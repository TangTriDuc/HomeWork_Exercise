const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const Videos = require("./dbModels");



//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://test:sPoHBSD0nXYLx5nM@test.z6kobm1.mongodb.net/lab'

//Middleware
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url)

//API Endpoint
app.get("/", (req,res) => {
    res.status(200).send("Hello TheWebDevv")
})

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
} )

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
} )


//Listener
app.listen(port, ()=>
 console.log(`Listening on localhost: ${port}`))