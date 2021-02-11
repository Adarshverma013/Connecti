const Post = require('../models/post');
//* controller for home page
module.exports.home = function (req,res) {
    // Post.find({},function (err,post) { 

    //     return res.render('home',{
    //         title: 'Home',
    //         posts: post
    //     });
    // });
    //* populate the user of each post
    Post.find({}).populate('user').exec(function (err,post) { 
        return res.render('home',{
            title: 'Home',
            posts: post
        });
     });
}

//  module.exports.actioName = function(req,res){}
