var express = require('express');
var app = express();

var index = require('./routes/index.js');
var disp_dat = require('./routes/disp_dat.js');

app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

app.use('/', index);
app.use('/disp_data', disp_dat);

app.listen(8080,function(req,res,next){
  console.log('app started');
});
