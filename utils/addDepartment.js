const inquirer = require('inquirer')
const connection = require('../db/connections');
const init = require('../index');
const viewDepartments = require('./viewDepartments');

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the new department?',
            }
        ])
        .then(async (response) => {
            connection.query(`INSERT INTO department (name) VALUES ('${response.name}')`);
        })
        .then(async () => {
            console.log('Please see the updated department table below.')
            viewDepartments()
            //init();
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

module.exports = addDepartment