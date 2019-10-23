// const mysql = require('mysql');
// const util = require('util');
//
// const con = mysql.createConnection({
//   host: "fall2019dbgunti.cvx4h0yw9trj.us-east-2.rds.amazonaws.com",
//   user: "rgunti1",
//   password: "Frank3nst3In_18",
//   database: "MMS"
// });
//
// const query_data = [
//   {QueryID:"1", Query: "SELECT * FROM Mentor;"},
//   {QueryID:"2", Query: "SELECT * FROM Apprentice"},
//   {QueryID:"3", Query: "SELECT * FROM Administrators"},
//   {QueryID:"4", Query: "SELECT Employee_Id, Username, First_name, Last_name, Job_Title, Birth_Date, Join_date FROM Employee"}
// ];
//
// con.connect(function(err)){
//   if (err) throw err;
//   console.log("Connected to Database");
// }
//
// function executeQuery(sql, cb){
//   con.query(sql, function(err, result, fields){
//     if(error) throw error;
//     cb(result);
//   })
// }
//
// const query = function get_query(queryid){
//   query_data.forEach(function(item){
//     if (item.QueryID === queryid){
//       query =  item.Query;
//     }
//   });
// }
//
// function get_table_data(queryid){
//   executeQuery(query(queryid), function(result){
//
//   }
// }
//
//
//
//
// get_table_data = async function (queryid){
//   console.log("2");
//   let query, result;
//   query_data.forEach(function(item){
//     if (item.QueryID === queryid){
//       query =  item.Query;
//     }
//   });
//
//   try{
//     if(query){
//       console.log("3");
//       const result = await con.query(query);
//       console.log("4");
//     }
//
//     return result;
//   }catch(err){
//     console.error(err.message);
//   }
// };
//
//
//
// module.exports = {get_table_data};


const query_data = [
  {QueryID:"1", Query: "SELECT * FROM Mentor;"},
  {QueryID:"2", Query: "SELECT * FROM Apprentice"},
  {QueryID:"3", Query: "SELECT * FROM Administrators"},
  {QueryID:"4", Query: "SELECT Employee_Id, Username, First_name, Last_name, Job_Title, Birth_Date, Join_date FROM Employee"}
];

var queryid = "1";

query_data.forEach(function(row){
   if (row.QueryID === queryid){
     console.log(row.Query);
   }
})
