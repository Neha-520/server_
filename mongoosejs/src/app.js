const mongoose = require("mongoose");

//connection creation and creating  a new db if not present
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("connected successfully"))
    .catch((err) => console.log(err));

//schema defines the structure of document
// pass default values,validator etc...
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, //not a validator
        //lowecase : true,uppercase:true,minlength:[2,"minimum 2 letters"],
        //maxlength : 30,trim:true
    },
    ctype: {
        type: String,
        enum: ["Front End", "Back End", "Database"],
    },
    videos: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("videos count cant be -ve");
            }
        }
    }, Number,
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
            ctype: "Back End",
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
//createDocument();

const getDocument = async () => {
    try {
        // const result = await Playlist.
        //     find({ ctype: { $nin: ["Back End", "Database", "Backend"] } })
        //     .select({ name: 1 })
        // .limit(1);
        const result = await Playlist.
            find(
                // { $and: [{ ctype: "Back End" }, { author: "Neha" }] })
                { author: "Neha" })
            .select({ name: 1 })
            .sort({ name: -1 });
        // .countDocuments();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocument();

//update the doc
const updateDocument = async (id) => {
    try {
        const result = await Playlist.updateOne({ _id: id }, {
            $set: { ctype: "Back End" }
        });
        console.log(result);
    } catch (err) { console.log(err); }
}


updateDocument("61669e0c815aaced3b806d32");

//delete the documents

const deleteDocument = async (id) => {
    try {
        const result = await Playlist.deleteOne({ _id: id }, {
            $set: { ctype: "Back End" }
        });
        console.log(result);
    } catch (err) { console.log(err); }
}
deleteDocument("61669e0c815aaced3b806d32");