const express = require("express");
const app = express();

app.use(express.static((__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/landing.html");
});

app.get('/vscode', (req, res) => {
    res.sendFile(__dirname + "/public/vscode.html");
});

app.get('/jsbasics', (req, res) => {
    res.sendFile(__dirname + "/public/jsbasics.html");
});

app.get('/nodejs', (req, res) => {
    res.sendFile(__dirname + "/public/nodejs.html");
});

app.get('/express', (req, res) => {
    res.sendFile(__dirname + "/public/express.html");
});

app.listen(8080);