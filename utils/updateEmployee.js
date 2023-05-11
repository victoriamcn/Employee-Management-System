const inquirer = require('inquirer');
const connection = require('../db/connections');
const viewEmployees = require('./viewEmployees');

//in progress
function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is the employee's FIRST name?"
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is the employee's LAST name?"
            },
            {
                type: 'input',
                name: 'role_id',
                message: "What is the employee's new role id?",
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "What is the employee's new manager's id?",
            },
        ])
        .then(async (response) => {
            connection.query(
                `UPDATE employee (first_name, last_name, role_id, manager_id) VALUES ('${response.first_name}', '${response.last_name}', ${response.role_id}, ${response.manager_id})`
            );

        })
        .then(async () => {
            console.log('Please see the updated employee table below.')
            viewEmployees()
            init()
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

module.exports = updateEmployee