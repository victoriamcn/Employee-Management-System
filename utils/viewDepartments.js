const connection = require('../db/connections');
require('console.table');


function viewDepartments() {
  connection.query("SELECT * FROM department", function (error, results) {
    if (error) {
      console.info(error)
    }
    console.table(results);
  })
  // init()
}

module.exports = viewDepartments