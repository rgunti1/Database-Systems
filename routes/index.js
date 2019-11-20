var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
  res.render('index');
})
.get('/Sprint1', function(req, res){
  res.render('Sprint1', {sprint: req.url.slice(1)});
})
.get('/Sprint2', function(req, res){
  res.render('Sprint2', {sprint: req.url.slice(1)});
})
.get('/Sprint3', function(req, res){
  res.render('Sprint3', {sprint: req.url.slice(1)});
});

module.exports = router;
