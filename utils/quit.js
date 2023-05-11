const connection = require('../db/connections');

function quit() {
    connection.end();
    process.exit();
}

module.exports = quit