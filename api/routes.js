const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

Router.use(bodyParser.json())

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'df7468d4-1cb3-448f-a9a2-5d74df096fd3',
  'password': 'vovzVbJn52D4',
  'version_date': '2017-02-27'
});

Router.post('/', function(req, res){
  // var myText = req.body.text

  // var parameters = {
  //   'features': {
  //     'keywords': {},
  //     'semantic_roles': {}
  //   },
  //   'text': req.body.text
  // };
  //
  // natural_language_understanding.analyze(parameters, function(err, response) {
  //   if (err){
  //     res.send('error:', err);
  //   }else{
  //     res.send(JSON.stringify(response, null, 2));
  //   }
  // });

  var person = req.body

  let data = fs.readFileSync(__dirname + '/data.json', 'utf8');
  data = JSON.parse(data)
  data.push(person)

  fs.writeFileSync(__dirname + '/data.json', JSON.stringify(data, null, 2));

  res.send().head(200)
})


module.exports = Router;
