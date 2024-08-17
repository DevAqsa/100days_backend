const express = require ("express");
const app = express()

const port = 8080;

//this use for every type of request (middleware)
app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.listen(port, () =>{
    console.log(`listening to port ${port}`)
})


app.get("/register" , (req, res) =>{
    let {user, password} = req.query
    res.send(`standard get response welcome ${user}`)
})

app.post("/register" , (req, res) =>{
    let {user, password} = req.body
    console.log(req.body)
    res.send(`standard post response welcome ${user}`)
})