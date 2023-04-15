const mysql = require('mysql2');
require('dotenv').config() //hide secrets

const connection = mysql.createConnection(
    //instance we created
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the classlist_db database.`)
);

connection.connect(function(err){
    if (err) throw err;
    //console.log('Connected :)')
})

module.exports = connection;