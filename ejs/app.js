const express = require ("express");
const path = require ("path")

const app = express()

const port = 8080

app.set("views", path.join(__dirname, "/views"))

app.set("view engine", "ejs")

// app.get("/", (req, res) =>{
//     res.render("home.ejs")
// })

app.get("/ig/:username", (req, res) =>{
    let {username} = req.params;

    let instaData = require("./data.json");

    const data = instaData[username];
    
    // let followers = ["iqra", "areeba", "sana" ,"hira"]
    
    if(data){
        res.render("ig.ejs", {data})
    } else {
             res.render("error.ejs")       
    }
   
})

//  assuming we passing the data in ejs from database

app.get("/rolldice", (req, res) =>{
    let dicValue =  Math.floor(Math.random() * 6) +1;
    res.render("rolldice.ejs", {num : dicValue}) //we mostly use the single value in object
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})