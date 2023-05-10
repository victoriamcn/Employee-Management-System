//inquirer
const inquirer = require('inquirer');
const connection = require('../db/connections');
const init = require('../index');
const viewEmployees = require('./viewEmployees');


function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is the new employee's FIRST name?"
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the new employee's LAST name?"
            },
            {
                type: 'list',
                name: 'role_id',
                message: "What is the new employee's role?",
                choices: viewRoles.map(role => ({ name: role.title, value: role.id }))
            },
            {
                type: 'list',
                name: 'manager_id',
                message: "Who is the new employee's manager?",
                choices: '',
            },
        ])
        .then(async (response) => {
            connection.query(
                `INSERT INTO employee (employee.first_name, employee.last_name, employee.role_id, employee.manager_id) VALUES (${response.first_name}, ${response.last_name}, ${response.role_id}, ${response.manager_id})`
            );
        })
        .then(async () => {
            console.log('Please see the updated employee table below.')
            viewEmployees()
            init
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

//function updateEmployee(){}

module.exports = addEmployee