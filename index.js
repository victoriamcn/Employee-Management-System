//inquirer
const inquirer = require('inquirer')
//database
const sql = require('./db/connections');

//import utils
const addemployee = require('./utils/addemployee')
const departmentUtil = require('./utils/departments')
const roleUtil = require('./utils/roles')

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
        .then((response) => {
            let choice = response.choices;
            //console.log(response)
            switch (choice) {
                case 'viewEmployees':
                    viewEmployees
                    break;
                case 'addEmployee':
                    addemployee;
                    break;
                case 'updateEmployee':
                    updateEmployee
                    break;
                case 'viewRoles':
                    viewRoles()
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
                case 'quit':
                    quit()
                    break;
            }
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
          });
        
}

//init menu
init();