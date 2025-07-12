const express = require('express');

// Create the app
app = express();

app.use(function(req, res, next) {
    console.log('I am from middleware validation');
    next();
});

app.get("/", function(req, res) {
    res.send('This is home page');
});

app.get("/about", function(req, res) {
    res.send('This is about page');
});

app.get("/contact", function(req, res) {
    res.send('This is contact page');
});

app.listen(8000, function() {
    console.log("Server Run Success");
});