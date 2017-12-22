const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path') 
const open = require('open')
const app = express();  
const port = 8000;  

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const server = app.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log("Server is running on port + " + port)
  }
});

let obj = {articles: []}
app.post('/json', urlencodedParser, function(req, res) {
  console.log(req.body)
  obj.articles.push(req.body)
  let data = JSON.stringify(obj, null, 2)
  //res.send(req.body)
  fs.writeFileSync('data.json', data)
  res.redirect('back')
})