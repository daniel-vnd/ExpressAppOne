var express = require('express');

// Create the app
app = express();

// In browser/postman write: http://localhost:8000?firstName=Daniel&lastName=Nicolae
app.get("/", function(req, res) {

    let firstName = req.header("firstName");
    let lastName = req.header("firstName");

    res.end(firstName + " " + lastName); 
});

app.listen(8000, function() {
    console.log("Server Run Success");
});