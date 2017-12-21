const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path') 
const open = require('open')
const app = express();  
const port = 8000;  

app.use(express.static(__dirname + '/public'));
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const server = app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log("Server is running on port + " + port)
  }
});

app.post('/json', urlencodedParser, function(req, res) {
  console.log(req.body)
})