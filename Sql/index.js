const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "DELTA_app",
  password: "Mernstack@2025",
});

try {
  connection.query("SHOW TABLES", (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (error) {
  console.log(error);
}

connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};


