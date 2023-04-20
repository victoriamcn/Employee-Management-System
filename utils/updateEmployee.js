const inquirer = require('inquirer');
const connection = require('../db/connections');
const viewEmployees = require('./viewEmployees');

//in progress
function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'name',
                message: "What is the employee's FIRST and LAST name?"
            },
            {
                type: 'list',
                name: 'role_id',
                message: "What is the employee's new role?",
                choices: viewRoles.map(role => ({ name: role.title, value: role.id }))
            },
            {
                type: 'list',
                name: 'manager_id',
                message: "Who is the employee's new manager?",
                choices: '',
            },
        ])
        .then(async (response) => {
            connection.query(
                //`UPDATE employee (employee.first_name, employee.last_name, employee.role_id, employee.manager_id) VALUES (${response.first_name}, ${response.last_name}, ${response.role_id}, ${response.manager_id})`
            );

        })
        .then(async () => {
            console.log('Please see the updated employee table below.')
            viewEmployees()
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

module.exports = updateEmployee