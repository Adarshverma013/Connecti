const express = require('express');
const app = express();
const port = 8000;


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
