var express = require('express');

// Create the app
app = express();


app.post("/", function(req, res) {
    res.send('This is simple Post Request')
});

app.listen(8000, function() {
    console.log("Server Run Success");
});