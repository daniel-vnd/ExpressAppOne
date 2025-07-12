const express = require('express');

// Create the app
app = express();


app.get("/", function(req, res) {
    res.send('This is home page');
});

app.use("/about", function(req, res, next) {
    console.log('I am from middleware validation only for about page');
    next();
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