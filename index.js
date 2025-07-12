var express = require('express');

// Create the app
app = express();
/*
app.get("/one", function(req, res) {
    // send - method work for the response of your body 
    // end - response your ending point 
    res.end("This is simple string response"); 
});
*/

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

// 58 - Response Download
app.get("/five", function(req, res) {
    res.download("./uploads/about.jpg"); 
});

// 59 - Response Redirect
app.get("/usa", function(req, res) {
    res.redirect("http://localhost:8000/india"); 
});


app.get("/india", function(req, res) {
    res.send("This is india page"); 
});

// 60 - Response Header
app.get("/six", function(req, res) {
    res.append("name", "Kazy Ariyan"); 
    res.append("city", "Dhaka"); 

    res.status(201).end("This is Response Header");
});

// 61 - Response Set Cookies Data
// In browser go in debug(F12)->Application->Cookies
app.get("/seven", function(req, res) {
    res.cookie("name", "Kazy Ariyan"); 
    res.cookie("city", "Dhaka"); 
    res.cookie("age", "35 Years Old"); 

    res.end("Cookie Set Successfully");
});

// 62 - Response Delete Cookies Data
app.get("/eight", function(req, res) {
    res.clearCookie("name"); 
    res.clearCookie("city"); 

    res.end("Cookie Deleted Successfully");
});

app.listen(8000, function() {
    console.log("Server Run Success");
});