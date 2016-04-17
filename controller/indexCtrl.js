var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "db.csokjgo7a9x2.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "a123456789",
  database: "dbdb"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

exports.getIndex = function (req, res) {
    // clean previous session result
    //connexion à bdd sql

con.query('SELECT * FROM annonce',function(err,rows){
  //if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});

    return res.render('index', {title: "Home", template: "home.ejs"});
};

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
