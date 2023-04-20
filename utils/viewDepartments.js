const connection = require('../db/connections');

function viewDepartments() {
  connection.query("SELECT * department FROM employees", function (error, results) {
    if (error) {
      console.info(error)
    }
    console.log(results);
  })
}

module.exports = viewDepartments