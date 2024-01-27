// setting up server
const { Console, error } = require("console");
const express = require("express");
const app = express();
// creatig the mongoose object
mongoose = require("mongoose")
// connecting to database
mongoose.connect("< put a Connection String>")
    .then(() => {
        console.log("Connectionn established")
    })

    .catch((err) => {
        Console.log("This is error",err)

    })

app.get("/", function (req, res) {
    res.send("Hello World");
});



app.listen(3000, () => {
    console.log(`The server is running on port 3000`);
});