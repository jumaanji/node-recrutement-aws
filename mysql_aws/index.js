var mysql = require("mysql");

var con = mysql.createConnection({
  host: "db.csokjgo7a9x2.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "a123456789",
  database: "dbdb"
});

function getElements(context) {
    con.connect(function(err){
	if(err){
	    console.log('Error connecting to Db');
	    return;
	}
	console.log('Connection established');
    });

    con.query('SELECT * FROM annonce',function(err,rows){ 
	//if(err) throw err;
	//con.end(function(err) {});
	context.succeed(rows);
    });
    
    con.end(function(err) {});
}

exports.handler = function(payload, context) {
    getElements(context);
};
