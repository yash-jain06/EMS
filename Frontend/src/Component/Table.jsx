import React, { useEffect, useState } from 'react';
import styles from './Table.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../utils/constant';

export default function Table() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(); // Fetch initial data when component mounts
  }, []);

  const fetchData = () => {
    axios.get(baseUrl)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios.delete(`${baseUrl}/${id}`)
      .then(() => fetchData()) // Fetch updated data after deletion
      .catch((error) => console.log(error));
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const addDataToTable = (formData) => {
    axios.post(baseUrl, formData)
      .then(() => fetchData()) // Fetch updated data after submission
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.table}>
      
      <table>
        <thead>
          <tr>
            <th scope="col" className="text-center">ID</th>
            <th scope="col" className="text-center">Name</th>
            <th scope="col" className="text-center">Age</th>
            <th scope="col" className="text-center">Email</th>
            
            <th scope="col" className="text-center">DOB</th>
            
            <th scope="col" className="text-center">DOJ</th>
            <th scope="col" className="text-center">Designation</th>
            <th scope="col" className="text-center">Department</th>
            <th scope="col" className="text-center">Contact</th>
            <th scope="col" className="text-center">Salary</th>
            
            <th scope="col" colSpan="2" className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row" className="text-center">{item.id}</th>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.age}</td>
              <td className="text-center">{item.email}</td>
              <td className="text-center">{item.dob}</td>
              
              <td className="text-center">{item.doj}</td>

              <td className="text-center">{item.designation}</td>
              <td className="text-center">{item.department}</td>
              <td className="text-center">{item.contact}</td>
              <td className="text-center">{item.salary}</td>
              <td className="text-center">
                <button type="button" className={`${styles.btn} btn-danger`} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
              <td>
                <button type="button" className={`${styles.btn1} btn-success`} onClick={() => handleNavigate(`/update/${item.id}/${item.name}/${item.age}/${item.email}/${item.dob}/${item.doj}/${item.designation}/${item.department}/${item.contact}/${item.salary}`)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
