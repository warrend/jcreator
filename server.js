const express = require('express')
var fs = require('fs');
const path = require('path') 
const open = require('open')
const app = express();  
const port = 8000;  

app.use(express.static(__dirname + '/public'));

const server = app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log("Server is running on port + " + port)
  }
});

