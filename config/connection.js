// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  port: 3306,
  user: "b047943f2baad7",
  password: "66f62196",
  database: "heroku_23652f1b381b1f7"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM
module.exports = connection;