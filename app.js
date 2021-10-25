const express = require("express");
const app = express();

app.get("/api/[0-9]{4}\-[0-9]{2}\-[0-9]{2}", (req,res) => {
    let _date = new Date(req.url.substr(5,req.url.length));
    res.json({"unix": _date.getTime(),"utc":_date.toUTCString()});
});
app.get("/api/[0-9]{13}", (req, res) => {
    let _date = new Date((parseInt(req.url.substr(5,req.url.length))/1000)*1000);
    res.json({"unix": _date.getTime(),"utc":_date.toUTCString()});
})
var port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log("Lisining...");
})