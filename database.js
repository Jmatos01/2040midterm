const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'mock_data'
});

connection.connect();

module.exports = connection;