const express = require('express');
var multer = require('multer');
var multer  = require('multer');

var multer = multer();

// Create the app
app = express();
app.use(multer.array());
app.use(express.static('public'));

// https://www.npmjs.com/package/body-parser
app.post("/", function(req, res) {
    let JSONData = req.body;

    res.send(JSON.stringify(JSONData));
});

app.listen(8000, function() {
    console.log("Server Run Success");
});