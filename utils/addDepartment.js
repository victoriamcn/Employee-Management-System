const inquirer = require('inquirer')
const connection = require('../db/connections');
const viewDepartments = require('./viewDepartments');

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the department?',
            }
        ])
        .then(async (response) => {
            connection.query(`SELECT * FROM department (department.name) VALUES  (${response.name})`);
        })
        .then(async () => {
            console.log('Please see the updated department table below.')
            viewDepartments()
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

module.exports = addDepartment