//* controller for home page
module.exports.home = function (req,res) {
    return res.render('home',{
        title: 'Home'
    });
}

//  module.exports.actioName = function(req,res){}
