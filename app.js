const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();



const items = ["Get Coffee", "Learn More Coding","Code for days", "Make More Projects"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function(req, res) {
  day = date.getDate();
  res.render("index", { kindOfDay: day, listItems: items });
});

app.post("/", function(req, res) {
  var item = req.body.listItems;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started port 3000");
});
