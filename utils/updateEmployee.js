const inquirer = require('inquirer');
const connection = require('../db/connections');
const init = require('../index');
const viewEmployees = require('./viewEmployees');

//in progress
function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employee_id',
                message: "What is the employee's id that you would like to update?"
            },
            {
                type: 'input',
                name: 'role_id',
                message: "What is the employee's new role id?",
            }
        ])
        .then(async (response) => {
            connection.query(
                `UPDATE employee SET role_id = ${response.role_id} WHERE id =${response.employee_id}`
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

module.exports = updateEmployee