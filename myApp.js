var express = require('express');
var app = express();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (req, res) => {
  res.json({
    "message":
      process.env.MESSAGE_STYLE != "uppercase" ?
        "Hello json" : "HELLO JSON"
  })
})



































module.exports = app;
