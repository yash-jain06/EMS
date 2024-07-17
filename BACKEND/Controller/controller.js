const pool=require('../db');
const queries= require('../queries');
const { validationResult } = require('express-validator');

const getStudent=(req,res)=>{
  pool.query(queries.getStudent,(error,results)=>{
    if(error) throw error;
    const formattedResults = formatResults(results.rows);
    res.status(200).json(formattedResults);

  })

}

const removeStudents=(req,res)=>{
  const id=parseInt(req.params.id);
   console.log(id);
   pool.query(queries.getStudentById,[id],(error,results)=>{
      if(error) 
        {console.error("Error:",error)
          return res.status(500).send("Server Error");
        }
        const noStudentFound=!results.rows.length;
        console.log("No Student Found ",noStudentFound);
        if(noStudentFound){
          res.status(400).send("Student does not exist in database");
        }
     })
      

   pool.query(queries.removeStudents,[id],(error,results)=>{
    if(error){
      console.error(error);
      return res.status(500).send("Server Error");
    }
      res.status(200).send("Student Removed Successfully");
     
   })
}


const addStudents=(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const{name,age,email,dob,doj,designation,department,contact,salary}=req.body;
  pool.query(queries.getStudentByEmail, [email], (error, results) => {
    if (error) {
      console.error("Error checking email:", error);
      return res.status(500).send("Server Error");
    }

    if (results.rows.length > 0) {
      return res.status(400).send("Email already exist in the database");
    }
    pool.query(queries.addStudents,[name,age,email,dob,doj,designation,department,contact,salary],(error,results)=>{ 
         if(error){
          console.error("Error Adding Students",error);
          res.status(500).send("Server Error");
         }
         res.status(201).send("Student Created Successfully");
         console.log("Students Created");
       })
})
}

const updateStudents=(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

    const id=parseInt(req.params.id);
    const{name,age,email,dob,doj,designation,department,contact,salary}=req.body;
    pool.query(queries.getStudentByEmail, [email], (error, results) => {
      if (error) {
        console.error("Error checking email:", error);
        return res.status(500).send("Server Error");
      }
  
      if (results.rows.length > 0 && results.rows[0].id !== id) {
        return res.status(400).send("Email already exists in the database");
      }
    pool.query(queries.updateStudents,[name,age,email,dob,doj,designation,department,contact,salary,id],(error,results)=>{
      if(error){
        console.error(error);
        return res.status(500).send("Server Error");  
      }
      res.status(200).send("Student Updated Successfully"); 
      
    })

})}
// Function to format date to YYYY-MM-DD
const formatDate = (date) => {
  if (date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-CA'); // en-CA format is YYYY-MM-DD
  }
  return null;
};

// Function to format the results
const formatResults = (results) => {
  return results.map(row => {
    row.doj = formatDate(row.doj); // Format the doj field
    return row;
  });
};



module.exports={
  getStudent,
  removeStudents,
  addStudents,
  updateStudents,
}