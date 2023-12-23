//jshint esversion:6
const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});


app.listen(4000, function() {
    console.log("Server has started on port 4000");
});