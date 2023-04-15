const connection = require('../db/connections');

connection.query("SELECT first_name, last_name FROM employee", function (err, result, fields) { 
    // INNER JOIN roles USING (title)
    //your function here what you want to do with that data/result
    if (err) {
        console.log('There was an error getting your results.')
        console.info(err)
    }
    console.log(result)
});