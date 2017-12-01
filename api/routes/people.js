const Router = require('express').Router();
const bodyParser = require('body-parser');
const fs = require('fs');

Router.use(bodyParser.json() && bodyParser.urlencoded({extended: true}))


Router.post('/', function(req, res){
  var person = req.body

  let data = fs.readFileSync(__dirname + '../data.json', 'utf8');
  data = JSON.parse(data)
  data.push(person)

  fs.writeFileSync(__dirname + '../data.json', JSON.stringify(data, null, 2));

  res.sendStatus(200);
})

Router.get('/', function(req, res){
  res.sendFile(__dirname + '/data.json')
})


module.exports = Router;
