// db OOP connection
const connection = require('./connections')

connection.query('SHOW TABLES; SELECT first_name last_name role_id FROM employee')