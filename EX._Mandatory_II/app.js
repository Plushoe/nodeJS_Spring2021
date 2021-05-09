//Import Express
const express = require("express");
const app = express();
//Configure Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Set folder for resources
app.use(express.static("public"));
//Declare routers
const projectsRouter = require("./routes/projects");
app.use(projectsRouter.router);


//Import filesystem
const fs = require("fs");

//Declare "sandwiching" html files
const top = fs.readFileSync(__dirname + "/public/templates/navbar.html", "utf-8");
const bottom = fs.readFileSync(__dirname + "/public/templates/footer.html", "utf-8");
const landingPage =  top + fs.readFileSync(__dirname + "/public/templates/index.html", "utf-8") + bottom;

app.get("/", (req, res) => {
    res.send(landingPage);
})

//Declare port to listen on
//DEV: Set up port failsafe
app.listen(8080);