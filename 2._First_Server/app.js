const express = require("express");
const app = express();


app.get("/about", (req, res) => {
    res.send({version: "The version :)"});
});

app.listen(8080);

