

exports.getIndex = function (req, res) {
    // clean previous session result
    //connexion à bdd sql 

    return res.render('index', {title: "Home", template: "home.ejs"});
};