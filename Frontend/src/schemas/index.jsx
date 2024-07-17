import * as Yup from 'Yup';
import './index.module.css'

export const signUpSchema = Yup.object({
  name: Yup.string()
    .typeError('Name must be a letter')
    .matches(/^[A-Za-z ]*$/, 'Name must contain only letters')
    .required('Please enter your name'),
  age: Yup.number()
    .typeError('Age must be a number')
    .required('Please enter your age'),
  email: Yup.string().email()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address')
    .required('Please enter your email'),
  doj: Yup.date()
    .typeError('Invalid date format')
    .required('Please enter date of joining'),
  designation: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Designation must contain only letters')
    .required('Please enter your designation'),
  department: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Department must contain only letters')
    .required('Please enter your department'),
  contact: Yup.string()
    .matches(/^\d{10}$/, 'Contact must be exactly 10 digits')
    .required('Please enter your contact'),
  salary: Yup.number()
    .typeError('Salary must be a number')
    .required('Please enter your salary'),
  
});
