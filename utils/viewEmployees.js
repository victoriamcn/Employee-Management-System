const connection = require('../db/connections');

// connection.query("SELECT first_name, last_name FROM employee", function (error, result, fields) { 
//     // INNER JOIN roles USING (title)
//     //your function here what you want to do with that data/result
//     if (error) {
//         console.log('There was an error getting your results.')
//         console.info(error)
//     }
//     //console.log(result)
// });

function viewEmployees(){
    const db = connection.query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
      db.then(([rows]) => {
        let employees = rows;
        console.log(rows);
      });
    }
    const employees = viewEmployees();
    console.log(employees);

module.exports = viewEmployees