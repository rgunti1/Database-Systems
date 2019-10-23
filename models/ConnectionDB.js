const mysql = require('mysql');

const con = mysql.createConnection({
  host: "fall2019dbgunti.cvx4h0yw9trj.us-east-2.rds.amazonaws.com",
  user: "rgunti1",
  password: "Frank3nst3In_18",
  database: "MMS",
  dateStrings: true
});

con.connect(function(error){
   if(error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });
const query_data = [
  {QueryID:"1", Query: "SELECT A.apprentice_id as apprentice_eid,concat(E.first_name,' ',E.last_name) as apprentice_name, A.mentor_id as mentor_eid, A.mentor_name FROM Employee as E, (SELECT A.apprentice_id, A.mentor_id, concat(E.first_name,' ',E.last_name) as mentor_name FROM Apprentice AS A, Employee E WHERE A.mentor_id = E.Employee_id) A WHERE A.apprentice_id = E.employee_id"},
  {QueryID:"2", Query: "SELECT A.apprentice_id AS apprentice_employee_id , M.receiver_id as receiver_employee_id, M.msg_text as message, M.Msg_time as message_time FROM Apprentice AS A, Message AS M WHERE M.sender_id = A.apprentice_id; "},
  {QueryID:"3", Query: "SELECT A.admin_id AS Employee_Id, E.first_name, E.last_name, E.username, E.birth_date, E.join_date  FROM Administrator AS A, Employee AS E WHERE A.admin_id = E.employee_id"},
  {QueryID:"4", Query: "SELECT E.employee_id, E.username,CONCAT(E.first_name,' ',E.last_name) AS employee_full_name,E.job_title,E.join_date, AD.address_line1, AD.address_line2, AD.city, AD.state, AD.zip_code  FROM Employee AS E, Address AS AD WHERE E.employee_id = AD.employee_id"}
];


module.exports = {con, query_data};
