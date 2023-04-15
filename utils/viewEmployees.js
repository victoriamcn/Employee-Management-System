// db OOP connection
const connection = require('./connections')

connection.query('SELECT first_name last_name role_id FROM employee')