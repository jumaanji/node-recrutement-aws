const CONF = require("../conf/super_secure_conf.json"),
      AWS = require("aws-sdk"),
      jsonfile = require('jsonfile');

var lambda = {};
var file = './json/data.json';

function handleResponseFromLambda(err, response) {
  if (err) {
    console.log("problem");
    console.dir(err);
    return;
  }

  jsonfile.writeFile(file, response.Payload, function (err) {
  	if (err) console.error(err)
  })
}

function runAFunctionOnLambda(fn_str) {
  var settings = {
    FunctionName: fn_str
  };
  lambda.invoke(settings, handleResponseFromLambda);
}

function init() {
  AWS.config = new AWS.Config({
    accessKeyId: CONF.AWS_ACCESS_KEY_ID,
    secretAccessKey: CONF.AWS_SECRET_ACCESS_KEY,
    region: "us-west-2"
  });
  lambda = new AWS.Lambda();
  runAFunctionOnLambda("mysqlGetElementsTest");
}

exports.getIndex = function (req, res) {
    // clean previous session result
    //connexion à bdd sql
    init();

    var data = JSON.parse(jsonfile.readFileSync(file));
    return res.render('index', {title: "Home", template: "home.ejs", jobs: data});
};