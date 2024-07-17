# EMS

IF YOU FACE ERROR: VITE NOT FOUND, SO PLEASE RUN THIS COMMAND IN THE TERMINAL: npm install vite --save-dev.

WHENEVER YOU UPDATE AND ADD, AFTER PERFORMING THESE ACTIONS YOU NEED TO REFRESH THE PAGE MANUALLY TO SEE THE CHANGES.

IF THE UPDATE BUTTON DOES NOT WORK PLEASE USE THIS FUNCTION IN CONTROLLER.JS:
1)FIRST REMOVE THE FUNCTION WHICH IS ON LINE 96 TO 102.
2)AND USE THIS FUNCTION :
const formatDate = (date) => {
  if (date) {
    const localDate = new Date(date);
    localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset()); // Adjust to local time
    return localDate.toISOString().split('T')[0]; // Split to get YYYY-MM-DD part
  }
  return null;
};


RUN COMMAND FOR BOTH NODE AND REACT: npm run dev

DEPENDENCIES: axios: npm i axios,
: bootstrap: npm i bootstrap@latest
: formik:npm i formik,
:   cors:npm i cors,
: yup: npm i yup,
: react: npm create vite@latest,
:react-bootstrap:npm i react-bootstrap,
:node: npm init -y
: express validator: npm i express-validator,
: Postgres: npm i pg,
: express: npm i express

##############DATABASE###############
CREATE DATABASE IN POSTGRES WHERE USE PORT ACCORDING TO YOUR DATABASE AND THE NAME OF THE DATABASE IS "employee" and the table name is "employers"
 QUERY TO CREATE DATABASE: CREATE database employee;
 CREATE TABLE: CREATE TABLE employers (
     id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    email VARCHAR(255),
    dob DATE,
    doj DATE,
    designation VARCHAR(255),
    department VARCHAR(255),
    contact BIGINT,
    salary INT
);
