const express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/sounds"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("listening at localhost: 3000");
});
