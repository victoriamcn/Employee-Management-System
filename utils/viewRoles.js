const connection = require('../db/connections');
require('console.table');

function viewRoles() {
  connection.query(
    "SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON role.department_id = department.id;", function (error, results) {
      if (error) {
        console.info(error)
      }
      console.table(results);
    });
}


module.exports = viewRoles