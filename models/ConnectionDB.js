const mysql = require('mysql');

const con = mysql.createConnection({
  host: "fall2019dbgunti.cvx4h0yw9trj.us-east-2.rds.amazonaws.com",
  user: "rgunti1",
  password: "Frank3nst3In_18",
  database: "MMS_Sprint2",
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
  {QueryID:"4", Query: "SELECT E.employee_id, E.username,CONCAT(E.first_name,' ',E.last_name) AS employee_full_name,E.job_title,E.join_date, AD.address_line1, AD.address_line2, AD.city, AD.state, AD.zip_code  FROM Employee AS E, Address AS AD WHERE E.employee_id = AD.employee_id"},
  {QueryID:"5", Query: "select E.employee_id, concat_ws(' ',E.first_name, E.last_name) Admin_FullName, E.username, E.Password, A.last_login_time, A.last_logout_time, IF(A.is_active, 'Active', 'Inactive') Account_status from Employee as E inner join Administrator as A on E.employee_id = A.admin_id"},
  {QueryID:"6", Query: "select E.employee_id, concat_ws(' ',E.first_name, E.last_name) Mentor_FullName, E.username, E.Password, M.last_login_time, M.last_logout_time, IF(M.is_active, 'Active', 'Inactive') Account_status from Employee as E inner join Mentor as M on E.employee_id = M.mentor_id"},
  {QueryID:"7", Query: "select E.employee_id, concat_ws(' ',E.first_name, E.last_name) Apprentice_FullName, E.username, E.Password, A.last_login_time, A.last_logout_time, IF(A.is_active, 'Active', 'Inactive') Account_status from Employee as E inner join Apprentice as A on E.employee_id = A.apprentice_id"},
  {QueryID:"8", Query: "SELECT concat_ws(' ',E1.first_name,E1.last_name) Apprentice_Name, J.* FROM (SELECT A.apprentice_id, A.mentor_id, concat_ws(' ',E.first_name,E.last_name) Mentor_Name, A.start_time, A.end_time, A.status, A.pre_meeting_notes, IFNULL(A.post_meeting_notes, 'Nothing provided by Mentor') post_meeting_notes, concat_ws(', ', concat('Room No: ',A.room_no), concat('Floor No: ',A.floor_no), concat('Building: ',A.building_name)) Location FROM Appointment as A INNER JOIN Employee as E on E.employee_id = A.mentor_id) as J INNER JOIN Employee as E1 ON E1.employee_id = J.apprentice_id"},
  {QueryID:"9", Query: "SELECT Q.quiz_id, Q.quiz_name, Q.is_active, Q.author, Qs.question_id, Qs.question_text, C.choice, C.is_right from Quiz as Q, Question as Qs, Choices as C  WHERE Q.quiz_id = Qs.quiz_id AND Qs.Question_id = C.Question_id AND C.quiz_id = Q.quiz_id"},
  {QueryID:"10", Query: "SELECT R.attempt_no,R.res_time, Q.quiz_id, Q.quiz_name, Qs.question_id, Qs.question_text, RA.is_right, RA.answer, R.Responder_id FROM Quiz as Q, Response as R, Question as Qs, Response_Answer as RA  WHERE R.quiz_id = Q.quiz_id and Q.quiz_id = Qs.quiz_id and RA.response_id = R.response_id and Qs.question_id = RA.question_id ORDER BY R.Responder_id, Attempt_no"},
  {QueryID:"11", Query: "SELECT concat_ws(' ',E1.first_name,E1.last_name) Apprentice_Name, J.* FROM (SELECT A.apprentice_id, A.mentor_id, concat_ws(' ',E.first_name,E.last_name) Mentor_Name, A.start_time, A.end_time, A.status, IF(A.attended, 'Yes', 'No') Attended, A.pre_meeting_notes,IFNULL(A.post_meeting_notes, 'Nothing provided by Mentor') post_meeting_notes, concat_ws(', ', concat('Room No: ',A.room_no), concat('Floor No: ',A.floor_no), concat('Building: ',A.building_name)) Location FROM Appointment as A INNER JOIN Employee as E on E.employee_id = A.mentor_id) as J INNER JOIN Employee as E1 ON E1.employee_id = J.apprentice_id"},
  {QueryID:"12", Query: "SELECT R.attempt_no,R.res_time, Q.quiz_id, Q.quiz_name, Qs.question_id, Qs.question_text, RA.answer, R.responder_id , C.choice FROM Quiz as Q, Response as R, Question as Qs, Response_Answer as RA , (SELECT * FROM Choices WHERE is_right = True) as C WHERE R.quiz_id = Q.quiz_id and Q.quiz_id = Qs.quiz_id and RA.response_id = R.response_id and Qs.question_id = RA.question_id and C.question_id = Qs.Question_id and C.quiz_id = Qs.quiz_id ORDER BY R.Responder_id"}
];


module.exports = {con, query_data};
