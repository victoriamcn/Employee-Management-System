//inquirer
const inquirer = require('inquirer')
// const sql = require('./db/connections');
// const roleUtil = require('./utils/roles')

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
        ])
        .then((response) => {
            let firstName = response.first_name;
            let lastName = response.last_name;
            console.log(firstName)
            console.log(lastName)
            db.query('INSERT INTO employee(first_name, last_name)', function (err, results) {
                console.log(results);
            })
        })

    }

//function updateEmployee(){}

module.exports = addEmployee()