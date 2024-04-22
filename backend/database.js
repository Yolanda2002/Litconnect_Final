const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lunhui6918',
    database: 'books'
});

module.exports = pool.promise();
