import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import axios from 'axios';
import { baseUrl } from '../utils/constant';
import btnstyles from './Btn.module.css'; // Import CSS module

const initialValues = {
  name: "",
  age: "",
  email: "",
  dob:"",
  doj: "",
  designation: "",
  department: "",
  contact: "",
  salary: "",
};

function Btn({ addData }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Submitting form with values:", values); // Log the form values
      axios.post(`${baseUrl}`, values)
        .then((response) => {
          console.log("Data saved successfully:", response.data);
          addData(values);
          alert("Form submitted");
        })
        .catch((error) => {
          console.log("There was an error while saving data:", error.response ? error.response.data : error.message);
        });
      setShowModal(false);
      resetForm();
    }
  });

  return (
    <>
      <button onClick={handleClick} type="button" className={`${btnstyles.btn} btn`}>Add</button>

      {showModal && (
        <div className={`modal show d-block ${btnstyles.modal}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className={`modal-content ${btnstyles['modal-content']}`}>
              <div className="modal-header">
              <h5 className="modal-title">Add New Entry</h5>

                <button type="button" className="close" onClick={handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.name} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="name" 
                      required 
                    />
                    {formik.errors.name && formik.touched.name ? <p className={btnstyles['form-error']}>{formik.errors.name}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input 
                      type="number" 
                      name="age" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.age} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="age" 
                      required 
                    />
                    {formik.errors.age && formik.touched.age ? <p className={btnstyles['form-error']}>{formik.errors.age}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.email} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="email" 
                      required 
                    />
                    {formik.errors.email && formik.touched.email ? <p className={btnstyles['form-error']}>{formik.errors.email}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="doj">DOB</label>
                    <input 
                      type="date" 
                      name="dob" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.dob} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="dob" 
                      required 
                    />
                    {formik.errors.dob && formik.touched.dob ? <p className={btnstyles['form-error']}>{formik.errors.dob}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="doj">DOJ</label>
                    <input 
                      type="date" 
                      name="doj" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.doj} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="doj" 
                      required 
                    />
                    {formik.errors.doj && formik.touched.doj ? <p className={btnstyles['form-error']}>{formik.errors.doj}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="designation">Designation</label>
                    <input 
                      type="text" 
                      name="designation" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.designation} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="designation" 
                      required 
                    />
                    {formik.errors.designation && formik.touched.designation ? <p className={btnstyles['form-error']}>{formik.errors.designation}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input 
                      type="text" 
                      name="department" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.department} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="department" 
                      required 
                    />
                    {formik.errors.department && formik.touched.department ? <p className={btnstyles['form-error']}>{formik.errors.department}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input 
                      type="number" 
                      name="contact" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.contact} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="contact" 
                      required 
                    />
                    {formik.errors.contact && formik.touched.contact ? <p className={btnstyles['form-error']}>{formik.errors.contact}</p> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input 
                      type="number" 
                      name="salary" 
                      className={`form-control ${btnstyles['form-control']}`} 
                      value={formik.values.salary} 
                      onChange={formik.handleChange} 
                      onBlur={formik.handleBlur} 
                      id="salary" 
                      required 
                    />
                    {formik.errors.salary && formik.touched.salary ? <p className={btnstyles['form-error']}>{formik.errors.salary}</p> : null}
                  </div>
                  
                  <button type="submit" className={`btn btn-primary ${btnstyles['btn-submit']}`}>Submit</button>
                </form>
              </div>
              <div className={`modal-footer ${btnstyles['modal-footer']}`}>
                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Btn;
