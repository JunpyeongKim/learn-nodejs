/**
 * 8.3 MySQL 모듈 기본
 *
 * $ npm install mysql
 * - https://github.com/felixge/node-mysql
 *
 * require('mysql).createClient(config) <-- deprecated
 *
 * Connection instance
 * - require('http').createConnection(config)
 *  - config: host, port, user, password, database, debug
 *
 * query(sql, [callback]);
 */

var mysql = require('mysql');

// Connection createConnection(config);
var client = mysql.createConnection({
    user: 'root'//,
    //password: 'password',
    //database: 'Company'   // USE Company;
});

// query(sql, [callback]);
client.query('USE Company');
client.query('SELECT * FROM products', function (error, result, fields) {
    if (error) {
        console.log('Error:');
    } else {
        console.log(result);
    }
});
