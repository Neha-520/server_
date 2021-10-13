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
//pascal convention
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document
const createDocument = async () => {
    try {
        const jsPlaylist = new Playlist({
            name: "Javascript",
            ctype: "Front End",
            videos: 150,
            author: "Neha",
            active: true,
        })
        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            videos: 10,
            author: "Neha",
            active: true,
        })
        const expressPlaylist = new Playlist({
            name: "Express JS",
            ctype: "Backend",
            videos: 20,
            author: "Neha",
            active: true,
        })

        const result = await Playlist.insertMany([jsPlaylist, mongoPlaylist, expressPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
createDocument();

const getDocument = async () => {
    try {
        const result = await Playlist.find({ ctype: "Database" })
            .select({ name: 1 })
            .limit(1);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();