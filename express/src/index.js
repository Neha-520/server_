const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 8000;

//use absolute path here
const templatePath = path.join(__dirname, "../templates/views")

app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

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