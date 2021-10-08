const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

//use absolute path here
const templatePath = path.join(__dirname, "../templates")

app.set("view engine", "hbs");
app.set('views', templatePath);

// app.use(express.static(path.join(__dirname, '../public')))


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})