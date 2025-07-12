var express = require('express');

// Create the app
app = express();

// In browser/postman write: http://localhost:8000?firstName=Daniel&lastName=Nicolae
app.post("/", function(req, res) {
    res.send('This is simple Post Request')
});

app.listen(8000, function() {
    console.log("Server Run Success");
});