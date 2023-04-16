const connection = require('../db/connections');

function viewDepartments(){
    const db = connection.query(
        "SELECT department.name"
      );
      db.then(([rows]) => {
        let departments = rows;
        console.log(rows);
      });
    }
    const departments = viewDepartments();
    console.log(departments);

module.exports = viewDepartments