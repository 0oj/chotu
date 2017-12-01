const Router = require('express').Router();
const bodyParser = require('body-parser');

Router.use(bodyParser.json() && bodyParser.urlencoded({extended: true}))

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'df7468d4-1cb3-448f-a9a2-5d74df096fd3',
  'password': 'vovzVbJn52D4',
  'version_date': '2017-02-27'
});

Router.post('/', function(req, res){
  const query = req.body.query

  var parameters = {
    'features': {
      'entities': {}
    },
    'text': query
  };

  natural_language_understanding.analyze(parameters, function(err, response) {
    if (err){
      res.send('error:', err);
    }else{
      res.send(JSON.stringify(response, null, 2));
    }
  });

  var person = req.body


  res.sendStatus(200);
})


module.exports = Router;
