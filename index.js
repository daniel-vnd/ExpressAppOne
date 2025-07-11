var express = require('express');

// Create the app
app = express();

app.get("/one", function(req, res) {
    
    res.send("This is simple string response"); 
});

app.post("/two", function(req, res) {
    res.send("This is post simple response");
});

app.listen(8000, function() {
    console.log("Server Run Success");
});