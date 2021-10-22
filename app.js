const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.send("Welcome to the timestamp api");
})

app.listen(() => {
    console.log("Lisining...");
})