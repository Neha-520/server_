const express = require("express"); ///we get express function
const app = express();

//parameters are route and callback funcn
app.get("/", (req, res) => {
    // res.send("Hello world from express");
    res.write("Hello world from express");
    res.write("Hello world from express");
    res.send(); //close connection
});

app.get("/about", (req, res) => {
    res.status(200).send("Hello world from about"); //by default express takes 200 status
});

app.get("/detail", (req, res) => {
    res.send([{
        id: 1,
        name: "neha",
    },
    {
        id: 2,
        name: "dca",
    },
    ]); //express  converts it to json format by default
});

//2nd way
app.get("/details", (req, res) => {
    res.json([{
        id: 3,
        name: "neha",
    },
    {
        id: 4,
        name: "dca",
    },
    ]);
}); //res.json will convert non-objects 
//such as null which are not balid json

app.listen(8000, () => {
    console.log("listening port at 8000")
})
