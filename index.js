//inquirer
const inquirer = require('inquirer')
//database
const sql = require('./db/connections');

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
                name: 'Update employee role',
                value: 'updateRole'
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
                message: "What is the new employee's LAST name?",
            }
        ])
        .then((response) => {
            console.log(response.first_name, response.last_name)
        })
}

//function to initialize prompt
function init() {
    inquirer
        .prompt(menu)
        .then((response) => {
            let choice = response.choices;
            console.log(response)
            switch (choice) {
                case 'addEmployee':
                    addEmployee();
                    break;

            }
        })
}
//init menu
init();

