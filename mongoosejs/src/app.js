const mongoose = require("mongoose");

//connection creation and creating  a new db if not present
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log(err));

//schema defines the structure of document
// pass default values,validator etc...
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//mongoose model provides an interface to db for creating,querying,updating & deleting records..

//its a class now
// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);
