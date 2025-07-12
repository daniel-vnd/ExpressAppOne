var express = require('express');
const bodyParser = require('body-parser');

// Create the app
app = express();

// Use Body Parser and call it as JSON method
app.use(bodyParser.json());

// https://www.npmjs.com/package/body-parser
app.post("/", function(req, res) {
    let JSONData = req.body;
    let JSONString = JSON.stringify(JSONData);

    res.send(JSONString);
});

app.listen(8000, function() {
    console.log("Server Run Success");
});