const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'jolans',
        password: '1234',
        database: 'eaqua'
    });
}