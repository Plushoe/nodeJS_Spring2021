const express = require("express");
const app = express();

app.use(express.static((__dirname + '/public')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html")
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + "/public/html/dragon.html")
});

app.get("/potato", (req, res) => {
    console.log(req.query);
    if (req.query.q === "spud") {
        return res.send("Petite potato!");
    }
    return res.send("Te gustan patatas");
});

app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + "/public/crypto/crypto.html");
});




app.listen(8080, err => {
    if (err) {
        console.log("lol error: " + err)
    }
});

