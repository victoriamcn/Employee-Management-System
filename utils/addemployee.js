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
                type: 'input',
                name: 'role_id',
                message: "What is role id for the new employee?",
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "Who is the new employee's manager?",
            },
        ])
        .then(async (response) => {
            connection.query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${response.first_name}', '${response.last_name}', ${response.role_id}, ${response.manager_id})`
            );
        })
        .then(async () => {
            console.log('Please see the updated employee table below.')
            viewEmployees()
            //init();
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

//function updateEmployee(){}

module.exports = addEmployee