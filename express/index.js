const express = require("express")

const app = express()

port = 8080;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})


app.use((req, res)=>{
    console.log("request recieved")
}) 