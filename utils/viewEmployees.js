const connection = require('../db/connections');

connection.query("SELECT first_name last_name role_id FROM employee INNER JOIN roles USING (title)", function (err, result, fields) { 
    //your function here what you want to do with that data/result
    
});