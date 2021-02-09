const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose'); //* locating  database
//* used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
//* to make our cookie stay when server restarts
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());
app.use(cookieParser());
//* set up static files
app.use(express.static('./assets'));

//* setting up layouts
app.use(expressLayouts);

//* extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//* set view engine 
app.set('view engine','ejs');

//* locate views folder
app.set('views','./views');

//* Mongo store is used to store the session cookie in the db
app.use(session({
    name: 'connecti',
    //TODO change the secret before deployement in production mode
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disables'
    },
    function (err) { 
        console.log(err || 'connect-mongodb setup ok');
     }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//* use express router
app.use('/',require('./routes'));

// start server
app.listen(port,function (err) {
   if(err){
       console.log(`Error while starting server: ${err}`);
   }
   console.log(`Server is running on port: ${port}`); 
});
