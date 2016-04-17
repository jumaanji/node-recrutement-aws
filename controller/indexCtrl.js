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

var json = [
   {
      "id":1,
      "titre":"Technicien de Surface",
      "societe":"Groupe DCNS",
      "type_poste":"CDI",
      "description":"Dans un environnement de travail jeune et dynamique, vous serez un(e) membre à part entière de l?équipe et prendrez part aux décisions importantes de l?entreprise.  Vous contribuerez à l?amélioration du front-end, au développement du back-office et assurerez le développement de nouvelles fonctionnalités."
   },
   {
      "id":2,
      "titre":"Agent de transit aérien",
      "societe":"Groupe DCNS",
      "type_poste":"CDI",
      "description":" "
   },
   {
      "id":3,
      "titre":"Vendeur Commercial ",
      "societe":"Saint-Gobain",
      "type_poste":"CDI",
      "description":" Très bon technicien, vous conseillez nos clients sur nos produits et trouvez des solutions sur-mesure."
   },
   {
      "id":4,
      "titre":"Assistant(e) Administratif H/F",
      "societe":"The Kooples ",
      "type_poste":"CDI ",
      "description":"En qualité d?Assistant(e) Administratif(ve), vous évoluez au sein du service IT et Service Généraux de la Maison The Kooples. Rattaché(e) au Responsable IT, vous aurez pour missions principales : -La Gestion des commandes de fournitures ; -La Gestion administrative du service ; -La Gestion des factures et les relances fournisseurs ; -L?aide au contrôle des factures. Ces missions ne sont pas limitatives et pourront être amenées à évoluer. "
   },
   {
      "id":5,
      "titre":" ASSITANT ÉVÉNEMENTIEL (H/F)",
      "societe":" Réunion des Musées Nationaux",
      "type_poste":"Stage",
      "description":" Au sein de la Direction des événements, des privatisations et de l?exploitation du Grand Palais et sous la responsabilité du chef du service événements et privatisations, vous intervenez en soutien de l?équipe sur la valorisation et la location des espaces du Grand Palais. Votre contribution portera sur les missions suivantes "
   },
   {
      "id":6,
      "titre":"Téléconseiller(e)",
      "societe":" Senior Media SAS",
      "type_poste":" CDI",
      "description":" Au sein de la plateforme téléphonique vous aurez pour mission principale d?émettre et recevoir des appels des internautes afin de les informer, conseiller et transmettre efficacement leurs demandes à nos partenaires."
   },
   {
      "id":7,
      "titre":"Responsable de résidence (H/F)",
      "societe":"ADEF",
      "type_poste":"CDI",
      "description":" Rattaché au Directeur de Secteur, vous êtes garant du bon fonctionnement de votre établissement et de son équilibre financier. "
   },
   {
      "id":8,
      "titre":" Remplacement du gardien ",
      "societe":"MAIRIE DE PARIS",
      "type_poste":"Intérim",
      "description":" Pour assurer les remplacements du gardien sur un site de bureaux dans le 12ème arrondissement à Paris"
   },
   {
      "id":9,
      "titre":"Standardiste - réceptioniste ",
      "societe":"SUSHI BA",
      "type_poste":"CDI",
      "description":"Nous souhaitons recruter Homme/Femme à temps partiel pour le poste de standardiste pour la prise de commande de repas par téléphone. Vous devrez être ponctuel, rigoureux, souriant, dynamique"
   },
   {
      "id":10,
      "titre":"GESTIONNAIRE PRODUCTION GESTION H/F ",
      "societe":"Groupama Gan ",
      "type_poste":"CDD",
      "description":"Au sein de la Direction Collectives de Groupama Gan Vie, vous intégrez le Département Prévoyance / Santé"
   }
]

// success:function(data){
  // $("#donnees").html('<table><tr><td>Nom de loeuvre</td><td>Artiste</td></tr></table>');
  // if (data) {
      // var obj = jQuery.parseJSON(json);
      // for(var key in json) {
      //     $('#resultat').append('<div>'+ json[key]['titre'] +'<br />'+ json[key]['societe'] +'</div>');
      // }
      // var text = '{"employees":[' +
      // '{"firstName":"John","lastName":"Doe" },' +
      // '{"firstName":"Anna","lastName":"Smith" },' +
      // '{"firstName":"Peter","lastName":"Jones" }]}';
      //
      // obj = JSON.parse(text);
      // document.getElementById("demo").innerHTML =
      // obj.employees[1].firstName + " " + obj.employees[1].lastName;
