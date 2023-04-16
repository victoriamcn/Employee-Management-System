const connection = require('../db/connections');

function viewRoles(){
    const db = connection.query(
        "SELECT role.title, role.salary;"
      );
      db.then(([rows]) => {
        let roles = rows;
        console.log(rows);
      });
    }
    const roles = viewRoles();
    console.log(roles);

module.exports = viewRoles