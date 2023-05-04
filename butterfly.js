var express = require('express');
var app = express();

const PORT = 25000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log("Enter here!!!")
  res.send('hello world');
});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`Server is Successfully Running, and App is listening on port `+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);