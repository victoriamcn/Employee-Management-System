const inquirer = require('inquirer')
const connection = require('../db/connections');
const viewDepartments = require('./viewDepartments')
const viewRoles = require('./viewRoles');

function addRole() {
    connection.
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the role?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?',
            },
            {
                type: 'list',
                name: 'department',
                message: 'What is the department for the role?',
                choices: [
                    {
                        name: 'Clerk',
                        value: 'Clerk'
                    },
                    {
                        name: 'Health',
                        value: 'Health'
                    },
                    {
                        name: 'Planning and Zoning',
                        value: 'Planning and Zoning'
                    },
                    {
                        name: 'Parks',
                        value: 'Parks'
                    },
                    {
                        name: 'Animal Control',
                        value: 'Animal Control'
                    },
                    {
                        name: 'City Council',
                        value: 'City Council'
                    },
                    {
                        name: 'Mayoral Office',
                        value: 'Mayoral Office'
                    },
                    {
                        name: 'Public Works',
                        value: 'Public Works'
                    },
                ]
            }
        ])
        .then(async (response) => {

            const db = connection.query(
                `INSERT INTO role (role.title, role.salary, role.department_id) VALUES  (${response.title}, ${response.salary})`
            );

        })
        .then(async () => {
            console.log('Please see the updated role table below.')
            viewRoles()
        })
        .catch((error) => {
            console.log('There was an error');
            console.info(error);
        });
}

module.exports = addRole