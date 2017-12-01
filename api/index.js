const express = require('express');

const port = 10002;

var app = express();

app.use(express.static('public'))
app.use('/person/', require('./routes/people'))

app.listen(port, function(){
  console.log(`Listening at port ${port}`);
});
