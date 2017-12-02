const Router = require('express').Router();
const bodyParser = require('body-parser');

Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({extended: true}))

const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': 'df7468d4-1cb3-448f-a9a2-5d74df096fd3',
  'password': 'vovzVbJn52D4',
  'version_date': '2017-02-27'
});

var natural_language_classifier = require('watson-developer-cloud').natural_language_classifier({
  username: '{username}',
  password: '{password}',
  version: 'v1'
});


Router.post('/', function(req, res){
  const query = req.body.query
  var NLC_res, NLU_res;

  // const NLU_parameters = {
  //   'features': {
  //     'entities': {}
  //   },
  //   'text': query
  // };
  //
  // natural_language_understanding.analyze(NLU_parameters, (err, response) => {
  //   if (err){NLU_res = 'ERROR'}
  //   else{NLU_res = JSON.stringify(response, null, 2)}
  // });



})


module.exports = Router;
