const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.send("Welcome to the timestamp api");
})
var port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log("Lisining...");
})