//* render user profile
module.exports.profile = function (req,res) { 
    return res.render('user_profile',{
        title: 'User Profile'
    });
 }

//* render sign in page
module.exports.signUp = function (req,res) { 
     return res.render('user_sign_up',{
         title: "ConnectI | Sign Up"
     });
  }
//* render sign up page
module.exports.signIn = function (req,res) { 
    return res.render('user_sign_in',{
        title: "ConnectI | Sign In"
    });
 }
 
//* get the sign up data
module.exports.create = function (req,res) { 
    //TODO later
 }

module.exports.createSession = function (res, req) { 
    //TODO later
 }
 