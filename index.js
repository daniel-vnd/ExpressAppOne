var express = require('express');

// Create the app
app = express();

// In browser/postman write: http://localhost:8000?firstName=Daniel&lastName=Nicolae
app.get("/", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName); 
});

app.listen(8000, function() {
    console.log("Server Run Success");
});