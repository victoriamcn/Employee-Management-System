const connection = require('../db/connections');

function viewRoles(){
    const db = connection.query(
        "SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON role.department_id = department.id;"
      );
      db.then(([rows]) => {
        let roles = rows;
        console.log(rows);
      });
    }
    const roles = viewRoles();
    console.log(roles);

module.exports = viewRoles