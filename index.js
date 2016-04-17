var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "db.csokjgo7a9x2.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "a123456789",
  database: "dbdb"
});

function getElements() {
  con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  con.query('SELECT * FROM annonce',function(err,rows){
    //if(err) throw err;

    console.log('Data received from Db:\n');
    return rows;
  });

  con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });

}

exports.handler = function(event, context) {
  var result = getElements();
  context.succeed(result);
}
