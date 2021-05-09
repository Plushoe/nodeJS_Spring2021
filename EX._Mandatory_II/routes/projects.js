const router = require("express").Router();

const projects = [
    {
        title: "Nodefolio",
        desc: "A portfolio made in my NodeJS elective",
        gitURL: "https://github.com/Plushoe/nodeJS_Spring2021",
        imageURL: "./images/nodefolio.png",
        tech: "NodeJS",
    },

    {
        title: "Template for further projects",
        desc: "lolololo",
        gitURL: "https://www.google.com",
        imageURL: "./images/logo.JPG",
        tech: "Nothing lolo",
    }
]

router.get("/api/projects", (req, res) => {
    res.send({projects: projects});
});

module.exports = {
    router
};