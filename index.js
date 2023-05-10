//inquirer
const inquirer = require('inquirer')
const connection = require('./db/connections');
require('console.table');

//import utils folder
//employee
const addEmployee = require('./utils/addEmployee')
const viewEmployees = require('./utils/viewEmployees')
const updateEmployee = require('./utils/updateEmployee')
//roles
const viewRoles = require('./utils/viewRoles')
const addRole = require('./utils/addRole')
//department
const viewDepartments = require('./utils/viewDepartments')
const addDepartment = require('./utils/addDepartment')

//Array of questions for user input
// const menu = 

//function to initialize prompt
function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    {
                        name: 'View all employees',
                        value: 'viewEmployees'
                    },
                    {
                        name: 'Add employee',
                        value: 'addEmployee'
                    },
                    {
                        name: 'Update employee',
                        value: 'updateEmployee'
                    },
                    {
                        name: 'View all roles',
                        value: 'viewRoles'
                    },
                    {
                        name: 'Add role',
                        value: 'addRole'
                    },
                    {
                        name: 'View all departments',
                        value: 'viewDepartments'
                    },
                    {
                        name: 'Add departments',
                        value: 'addDepartment'
                    },
                    {
                        name: 'Quit',
                        value: 'quit'
                    }
                ]
            }
        ])
        .then((response) => {
            let choices = response.choice
            //console.log(response)
            switch (choices) {

                case 'viewEmployees':
                    viewEmployees();
                    break;
                case 'addEmployee':
                    addEmployee();
                    break;
                case 'updateEmployee':
                    updateEmployee();
                    break;
                case 'viewRoles':
                    viewRoles();
                    break;
                case 'addRole':
                    addRole()
                    break;
                case 'viewDepartments':
                    viewDepartments()
                    break;
                case 'addDepartment':
                    addDepartment()
                    break;
                default: end()
                    break;
            }
        })
        .catch((error) => {
            console.log('There was an error:');
            console.info(error);
        });

}

init();

module.exports = init