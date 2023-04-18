const inquirer = require('inquirer')
const connection = require('../db/connections');

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the department?',
            }
    ])
        .then(async (response) => {

            const db = connection.query(
                `INSERT INTO department (department.name) VALUES  (${response.name})`
            );
            db.then(([rows]) => {
                let departments = rows;
                console.log(rows);
            });
        })
    const departments = addDepartment();
    console.log(departments);
}

module.exports = addDepartment