const express = require("express"); ///we get express function
const app = express();

//parameters are route and callback funcn
app.get("/", (req, res) => {
    res.send("Hello world from express");
});

app.get("/about", (req, res) => {
    res.send("Hello world from about");
});

app.listen(8000, () => {
    console.log("listening port at 8000")
})
