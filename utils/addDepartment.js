const inquirer = require('inquirer')
const connection = require('../db/connections');
const viewDepartments = require('./utils/viewDepartments');

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

            const db = connection.query(
                `INSERT INTO department (department.name) VALUES  (${response.name})`
            );

        })
        .then(async ()=> {
            console.log('Please see the updated department table below.')
            viewDepartments()
        })
}

module.exports = addDepartment