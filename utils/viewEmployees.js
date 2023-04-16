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
    const [rows] =  connection.query('SELECT * FROM employee')
    return rows
}
const employees =  viewEmployees()
console.log(employees)

module.exports = viewEmployees