const connection = require('../../db/connections');
const viewDepartments = require('../viewDepartments');

function departmentList() {

    let query = "SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON role.department_id = department.id;"

    connection.query(query, function (error, response) {
        if (error) throw err;

        const list = response.map(data => ({
            value: data.id, name: data.name
        }));

        response.status(200).json(list);

    });
}
module.exports = departmentList
