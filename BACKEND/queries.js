const getStudent= "SELECT * FROM employers ORDER BY ID ASC";
const removeStudents="DELETE FROM employers WHERE id=$1";
const getStudentById="SELECT * FROM employers WHERE id=$1";
const addStudents="INSERT INTO employers(name,age,email,dob,doj,designation,department,contact,salary) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)";
const updateStudents="UPDATE employers SET name = $1, age = $2, email = $3,dob=$4, doj = $5, designation = $6, department = $7, contact = $8, salary = $9 WHERE id = $10";
const getStudentByEmail = "SELECT * FROM employers WHERE email=$1";




module.exports={
  getStudent,
  removeStudents,
  getStudentById,
  addStudents,
  updateStudents,
  getStudentByEmail
}