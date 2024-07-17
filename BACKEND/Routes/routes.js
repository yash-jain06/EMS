const express = require('express');
const { body } = require('express-validator');
const controller = require('../Controller/controller');
const router = express.Router();

// Validation rules
const studentValidationRules = [
  body('name').isString().isLength({ min: 2, max: 50 }).withMessage('Name should be between 2 and 50 characters long'),
  body('age').isInt({ min: 1, max: 150 }).withMessage('Age should be an integer between 1 and 150'),
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('doj').isDate().withMessage('Please enter a valid date for Date of Joining'),
  body('designation').isString().withMessage('Designation should be a string'),
  body('department').isString().withMessage('Department should be a string'),
  body('contact').isInt().isLength({ min: 10, max: 10 }).withMessage('Contact should be a valid 10-digit phone number'),
  body('salary').isNumeric().isFloat({ gt: 0 }).withMessage('Salary should be a positive number')
];

router.get('/', controller.getStudent);
router.delete('/:id', controller.removeStudents);
router.post('/', studentValidationRules, controller.addStudents);
router.put('/:id', studentValidationRules, controller.updateStudents);

module.exports = router;
