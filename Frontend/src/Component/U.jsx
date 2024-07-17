import  { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../utils/constant';
import styles from './U.module.css';

export default function UpdateDetails() {
  const navigate = useNavigate();
  const { id, name, age, email,dob, doj, designation, department, contact, salary } = useParams();

  const [formData, setFormData] = useState({
    id,
    name,
    age,
    email,
    dob,
    doj,
    designation,
    department,
    contact,
    salary,
  });

  const UpdateBtn = async (data) => {
    try {
      await axios.put(`${baseUrl}/${data.id}`, data);
      alert("Data Updated Successfully");
    } catch (error) {
      console.error(error);
      alert("Error Updating Data");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateBtn(formData);
    navigate('/');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.updateDetailsContainer}>
      <h3 className={styles.updateDetailsHeader}>Update Details</h3>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formId" className={`col-sm-2 col-form-label ${styles.formLabel}`}>ID</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formId"
              name="id"
              value={formData.id}
              readOnly
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formName" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formName"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formAge" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Age</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formAge"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formEmail" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className={`${styles.formControl} form-control`}
              id="formEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formDob" className={`col-sm-2 col-form-label ${styles.formLabel}`}>DOB</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formDob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formDoj" className={`col-sm-2 col-form-label ${styles.formLabel}`}>DOJ</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formDoj"
              name="doj"
              value={formData.doj}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formDesignation" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Designation</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formDesignation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formDepartment" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Department</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formDepartment"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formContact" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Contact</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formContact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formGroup} row`}>
          <label htmlFor="formSalary" className={`col-sm-2 col-form-label ${styles.formLabel}`}>Salary</label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`${styles.formControl} form-control`}
              id="formSalary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-sm-12 text-center">
            <button type="submit" className={`${styles.submitButton}`} style={{ marginRight: '10px' }}>
              Update
            </button>
            <button type="button" className={`${styles.backButton} `} onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
