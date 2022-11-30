const mongoose = require("mongoose");

const sortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares:String,
    messages:String
})

const shortVideo =  mongoose.model("shortVideo", sortVideoSchema)
module.exports = shortVideo;