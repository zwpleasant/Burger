// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "a8g90tpzjbiiol7h",
  password: "pje89affmmbdqvxg",
  database: "necfdnyb3wnc64ko"
});
// var connection = mysql.createConnection('mysql://a8g90tpzjbiiol7h:pje89affmmbdqvxg@d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/necfdnyb3wnc64ko');

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
