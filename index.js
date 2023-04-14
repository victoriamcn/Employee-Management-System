//inquirer
const inquirer = require('inquirer')
//database
const db = require('./db/connections');

//Array of questions for user input
const menu = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View all departments','View all roles']
    }
]

//TODO: Create a function to initialize app
function init() {
    inquirer.prompt(menu).then((response) => {
        console.log(response)
    })
}




// Function call to initialize app
init();