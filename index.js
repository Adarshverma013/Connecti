const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose'); //* locating  database

app.use(express.urlencoded());
app.use(cookieParser());
//* set up static files
app.use(express.static('./assets'));

//* setting up layouts
app.use(expressLayouts);

//* extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//* use express router
app.use('/',require('./routes'));

//* set view engine 
app.set('view engine','ejs');

//* locate views folder
app.set('views','./views');

// start server
app.listen(port,function (err) {
   if(err){
       console.log(`Error while starting server: ${err}`);
   }
   console.log(`Server is running on port: ${port}`); 
});
