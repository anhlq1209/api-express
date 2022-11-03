// employee.routes.js
const express = require('express')

const router = express.Router()

const employeeController =   require('../controllers/employee.controller');

// Get all employees
router.get('/', employeeController.getAll);

module.exports = router
