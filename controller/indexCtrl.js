

exports.getIndex = function (req, res) {
    // clean previous session result

    return res.render('index', {title: "Home", template: "home.ejs"});
};