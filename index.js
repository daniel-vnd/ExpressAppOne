const express = require('express');
var multer = require('multer');

// Create the app
app = express();

var storage = multer.diskStorage({
    // Where the destination will be uploaded
    destination: function(req, file, callback){
        callback(null, './uploads');
    },
    // In particular with file original name
    filename: function(req, file, callback) {
        callback(null, file.originalname)
    }
});

var upload = multer({storage: storage}).single('myfile');

// https://www.npmjs.com/package/body-parser
app.post("/", function(req, res) {

    upload(req, res, function(error) {
        if (error) {
            res.send("File Upload Failed");
        } else {
            res.send("File Upload Success");
        }
    })
});

app.listen(8000, function() {
    console.log("Server Run Success");
});