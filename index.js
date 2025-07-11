var express = require('express');

// Create the app
app = express();

app.get("/", function(req, res) {
    res.send("Hello Page");
});

app.post("/about", function(req, res) {
    res.send("About Page");
});

app.delete("/contact", function(req, res) {
    res.send("Contact Page");
});

app.listen(8000, function() {
    console.log("Server Run Success");
});