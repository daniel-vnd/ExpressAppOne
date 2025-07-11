var express = require('express');

// Create the app
app = express();

app.get("/one", function(req, res) {
    // send - method work for the response of your body 
    // end - response your ending point 
    res.end("This is simple string response"); 
});

app.post("/two", function(req, res) {
    res.send("This is post simple response");
});

app.listen(8000, function() {
    console.log("Server Run Success");
});