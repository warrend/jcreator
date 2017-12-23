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

app.post('/json', urlencodedParser, (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    let jfile = JSON.parse(data)
    jfile.articles.push(req.body)
    let obj = JSON.stringify(jfile, null, 2)
    fs.writeFile('data.json', obj)
  })
  res.redirect('back')
})