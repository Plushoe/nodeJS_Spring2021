//Imports
const express = require('express');
const app = express();

//Declare month names and weekday names
const months = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Get day
app.get('/day', (req, res) => {
    res.send('Today is ' + weekdays[new Date().getDay()]);
});

//Get Month
app.get('/month', (req, res) => {
    res.send('The current month is ' + months[new Date().getMonth()]);
});

//Get Year
app.get('/year', (req, res) => {
    res.send('We live in the year ' + new Date().getFullYear());
});

//Get time
app.get('/time', (req, res) => {
    res.send('The time when the request was received was ' + new Date().getHours() + ':' + new Date().getMinutes());
});

//Declare port to listen on
app.listen(8080);