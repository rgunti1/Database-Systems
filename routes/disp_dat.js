var express = require('express');
var router = express.Router();
var connection  = require('../models/ConnectionDB');

router.get('/',function(req, res){
    if(req.query.QueryID){
      var queryString;
      connection.query_data.forEach(function(row){
        if (row.QueryID === req.query.QueryID){
          queryString = row.Query;
        }
      })
      connection.con.query(queryString,function(err,result,fields) {
        if(err){
          res.redirect('/');
        }else{
          var columns=[];
          var table = [];
          fields.forEach(function(row){
            columns.push([row.orgTable,row.name]);
            table.push(row.orgTable);
          })
          table = Array.from(new Set(table));
          res.render('disp_dat',{data:JSON.parse(JSON.stringify(result)),columns:columns,table:table, queryid : req.query.QueryID, queryS:queryString});
        }
      });
    } else{
      res.redirect('/');
    }
});

module.exports = router;
