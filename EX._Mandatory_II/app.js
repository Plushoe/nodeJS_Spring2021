//Load env variables
require('dotenv').config({ path: "./.env"});

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

const contactRouter = require("./routes/contact");
app.use(contactRouter.router);

//Import filesystem
const fs = require("fs");

//Declare "sandwiching" html files
const top = fs.readFileSync(__dirname + "/public/templates/navbar.html", "utf-8");
const bottom = fs.readFileSync(__dirname + "/public/templates/footer.html", "utf-8");

const mainPage =  top + fs.readFileSync(__dirname + "/public/templates/index.html", "utf-8") + bottom;
app.get("/", (req, res) => {
    res.send(mainPage);
});


const contactPage = top + fs.readFileSync(__dirname +"/public/templates/contact.html", "utf-8") + bottom;
app.get("/contact", (req, res) => {
    res.send(contactPage);
});

const projectsPage = top + fs.readFileSync(__dirname +"/public/templates/projects.html", "utf-8") + bottom;
app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

//Declare port to listen on
//DEV: Set up port failsafe
app.listen(8080);