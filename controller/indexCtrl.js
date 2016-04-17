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
    init();

    var data = JSON.parse(jsonfile.readFileSync(file));
    return res.render('index', {title: "Home", template: "home.ejs", jobs: data});
};

exports.getAnnonce = function (req, res) {
  var annonce = {};
  var data = JSON.parse(jsonfile.readFileSync(file));
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == req.params.id) {
      annonce = data[i];
      break;
    }
  }
  console.log(annonce);

  return res.render('index', {title: "Annonce", template: "annonce.ejs", job: annonce});
};
