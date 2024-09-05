const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4()

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
         id: uuidv4(),
        username : "aqsa",
        content : "here is devaqsa learning backend with nodejs"
    },

    {
        id: uuidv4(),
        username : "sana",
        content : "coming back to pakistan"
    },

    {   
        id: uuidv4(),
        username : "iqra",
        content : "baby is the blessing of the GOD"
    }
]

app.get("/posts/new" , (req, res) =>{
  res.render("new.ejs")
})

app.post("/post" , (req, res) =>{
let {username, content} = req.body;
let id = uuidv4()
posts.push({id, username, content});
res.redirect("/posts")
})

app.get("/posts/:id" , (req, res) =>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", {post});
  })

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});

app.listen(port, () => {
  console.log("listening on port 8080");
});
