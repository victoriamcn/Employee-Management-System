const inquirer = require('inquirer')
const connection = require('../db/connections');
const viewDepartments = require('./viewDepartments')
const departmentList = require('./departmentArray')
const viewRoles = require('./viewRoles');

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?',
            },
            {
                type: 'list',
                name: 'department',
                message: 'What is the department for the role?',
                choices: departmentList,
            }
        ])
        .then(async (response) => {
            connection.query(
                `INSERT INTO role (role.title, role.salary, role.department_id) VALUES  (${response.title}, ${response.salary}, ${response.department_id})`
            );

        })
        .then(async () => {
            console.log('Please see the updated role table below.')
            viewRoles()
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}
}

module.exports = addRole