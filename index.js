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

// Response status code
app.get("/three", function(req, res) {
    // 401 - unathorized 
    res.status(401).end("You don't have any permission");
});

// JSON response 
app.get("/four", function(req, res) {
    let myJSONArray = [
        {
            name: "Ariyan",
            city: "Dhaka"
        },
        {
            name: "Raju",
            city: "USA"
        },
        {
            name: "Johny",
            city: "India"
        },
    ]
    res.json(myJSONArray);
});

app.listen(8000, function() {
    console.log("Server Run Success");
});