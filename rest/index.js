const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "views")));


let posts = [
    {
        username : "aqsa",
        content : "here is devaqsa learning backend with nodejs"
    },

    {
        username : "sana",
        content : "coming back to pakistan"
    },

    {
        username : "iqra",
        content : "baby is the blessing of the GOD"
    }
]


app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});

app.listen(port, () => {
  console.log("listening on port 8080");
});
