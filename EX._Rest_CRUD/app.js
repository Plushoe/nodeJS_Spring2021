//Imports
const { response } = require('express');
const express = require('express');
const app = express();

//Start data
const metals = ['Iron', 'Lithium', 'Gold', 'Silver', 'Aluminium'];

//CRUD start

//Retrieve list of metals
app.get('/metals', (req, res) => {
    res.send(metals);
});

//GET by id - View a single metal
app.get('/metals/:id', (req, res) => {
    res.send({'metal': metals[req.params.id]})
});

//Delete a metal by id
app.get('/delete/:id', (req, res) => {
    res.send(metals.splice(req.params.id, 1) + ' was deleted!')
});

//Add new metal to list
app.get('/new/:metalName', (req, res) => {
    metals.push(req.params.metalName);
    res.send(req.params.metalName + ' was added!');
});


//Update a metal on the list by id
app.get('/update/:id/:metalName', (req, res) => {
    let prevName = metals[req.params.id];
    metals[req.params.id] = req.params.metalName;

    res.send(prevName + ' was changed to ' + req.params.metalName);
});


//Port listening
app.listen(8080);