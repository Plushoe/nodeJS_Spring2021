const express = require("express");
const app = express();

app.get("/querystring", (req, res) => {
    console.log(req.query)
    res.send({ query: req.query });
});

app.get("/pathvariable/:message/:title", (req, res) => {
    res.send({ pathVar1: req.params.message, pathVar2: req.params.title })
});



app.listen(8080);