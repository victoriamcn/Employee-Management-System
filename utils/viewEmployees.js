const connection = require('../db/connections');
const init = require('../index');
require('console.table');


function viewEmployees() {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", 
  function (error, results) {
    if (error) {
      console.info(error)
    }
    console.table(results);
  })
  //init();
}

module.exports = viewEmployees