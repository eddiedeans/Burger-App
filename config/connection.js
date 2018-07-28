var mysql = require('mysql');

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "burgers_db"
});

//connect
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;