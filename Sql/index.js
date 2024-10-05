const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express()
const path = require("path")
const methodoverride = require("method-override")


app.use(methodoverride("_method"));
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "DELTA_app",
  password: "Mernstack@2025",
});

//inserting new data

// let q = "INSERT INTO USER (id, username, email, password)VALUES ? ";
// let users = [["123b", "123@newuserb", "abc@gmail.comb", "abcb"],
// ["123f", "123@newuserf", "abc@gmail.comf", "abcf"]];


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ]
};

// let data = []
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// };

// 

// let getRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

//HOME ROUTE
app.get("/", (req, res) =>{
  let q = "SELECT count(*) FROM user"
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"]
      res.render("home.ejs", {count})
    });
  } catch (error) {
    console.log(error);
    res.send('error in the database')
  }
})

//SHOW USERS Route
app.get("/user" , (req, res) => {
 
  let q = "SELECT * FROM user"
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
    //  console.log(result)
    //  res.send(result)
    res.render("showusers.ejs", {users})
    });
  } catch (error) {
    console.log(error);
    res.send('error in the database')
  }
})

//edit Route
app.get("/user/:id/edit", (req, res) =>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id ='${id}'`;
  
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
  let user = result[0];
    res.render("edit.ejs", {user})
    });
  } catch (error) {
    console.log(error);
    res.send('error in the database')
  }
  
})


//UPDATE (DB) Route
app.patch("/user/:id" , (req, res) => {
let {id} = req.params;
let {password: formPass, username: newUsername} = req.body
let q = `SELECT * FROM user WHERE id ='${id}'`;


try {
  connection.query(q, (err, result) => {
    if (err) throw err;
let user = result[0];
if(formPass != user.password){
  res.send("You Entering A wrong Password")
}else {
  let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`
  connection.query(q2, (err, result) =>{
    if (err) throw err;
    res.send(result);
  })
}
  res.send(user)
  });
} catch (error) {
  console.log(error);
  res.send('error in the database')
}
  
})



app.listen("8080", () =>{
  console.log("server is running on port 8080")
})


//try {
  //   connection.query(q, [data], (err, result) => {
  //     if (err) throw err;
  //     console.log(result);
  //     console.log(result.length)
  //   });
  // } catch (error) {
  //   console.log(error);
  
  // }
  
  // connection.end();