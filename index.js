//inquirer
const inquirer = require('inquirer')
const connection = require('./db/connections');

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
const menu = [
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
]

//function to initialize prompt
function init() {
    inquirer
        .prompt(menu)
        .then(async (response) => {
            let choice = response.choice;
            //console.log(response)
            //await init();
            switch (choice) {

                case 'viewEmployees':
                    viewEmployees;
                    break;
                case 'addEmployee':
                    addEmployee;
                    break;
                case 'updateEmployee':
                    updateEmployee;
                    break;
                case 'viewRoles':
                    viewRoles;
                    break;
                case 'addRole':
                    addRole
                    break;
                case 'viewDepartments':
                    viewDepartments
                    break;
                case 'addDepartment':
                    addDepartment
                    break;
                case 'quit':
                    (await connection).end()
                    break;
            }
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });

}
//QUIT
// function quit(){

// }

//init menu
init();