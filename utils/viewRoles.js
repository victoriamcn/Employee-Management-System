const connection = require('../db/connections');

function viewRoles() {
  connection.query(
    "SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON role.department_id = department.id;", function (error, results) {
      if (error) {
        console.info(error)
      }
      console.log(results);
    });
}


module.exports = viewRoles