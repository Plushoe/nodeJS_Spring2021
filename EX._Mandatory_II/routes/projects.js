const router = require("express").Router();

const projects = [
    {
        title: "template",
        description: "lolololo",
        gitURL: "https://www.google.com",
        images: [],
        tech: ["NodeJS"],
    },

    {
        title: "template",
        description: "lolololo",
        gitURL: "https://www.google.com",
        images: [],
        tech: ["NodeJS"],
    }
]

router.get("/api/projects", (req, res) => {
    res.send(projects);
});

module.exports = {
    router
};