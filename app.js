const express = require("express");
const app = express();

app.get("/api/:date?", (req,res) => {
    const _param = req.params.date;
    const sdate = /^[0-9]{2}\ [a-zA-Z]*\ [0-9]{4}$/
    const fdate = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;
    const udate = /^[0-9]{13}$/;
    console.log({ "msg" : req.params.date });
    if(_param === undefined){
        const _date = new Date();
        res.json({"unix": _date.getTime(),"utc":_date.toUTCString()});
    } else if(_param.match(fdate)){
        const _date = new Date(_param);
        res.json({"unix": _date.getTime(),"utc":_date.toUTCString()});
    } else if(_param.match(udate)){
        const _date = new Date((parseInt(_param)/1000)*1000);
        res.json({"unix": _date.getTime(),"utc":_date.toUTCString()});
    } else if(_param.match(sdate)){
      const _date = new Date(_param)|| "";
      if(_date == "") res.json({ error : "Invalid Date" })
      res.json({"unix": _date.getTime(),"utc":_date.toUTCString()});
    } else {
        res.json({ error : "Invalid Date" })
    }
});

var port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Lisining on ${port}`);
})