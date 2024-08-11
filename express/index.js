const express = require("express")

const app = express()

port = 8080;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})


// app.use((req, res)=>{

//     console.log("request recieved");
//     res.send({
//         fruit: "apple",
//         color: "red",
//         price : 250
//     })
// }) 

app.get("/" , (req, res) =>{
    res.send("you connected to the root path")
})

// this code is for path parameters

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("You connected again ")
})

// app.get("/search", (req, res) =>{
//     console.log(req.query);
//     res.send("no results")
// })

// app.get("/about", (req, res) =>{
//     res.send("this is the about page")
// })

// app.get("/services", (req, res) =>{
//     res.send("this is the services page")
// })

// app.get("/contact", (req, res) =>{
//     res.send("this is the contact page")
// })

// app.get ("*" , (req, res) =>{
//     res.send("404 page not found")
// })

// app.post("/" , (req,res) =>{
//     res.send("you connected to the root path with post method")
// })



// this code is for query string

app.get ("/search", (req, res) =>{
    let {q} = req.query;
    if(!q)
        res.send("search result for : ${q}")
})
