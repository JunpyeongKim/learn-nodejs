/**
 * 8.4 MySQL 모듈을 이용한 CRUD 구현
 * - 8.4.1 데이터 표시 구현
 *
 * $ npm install connect@1.8.5 ejs mysql
 *
 * CREATE DATABASE Company;
 *
 * USE Company;
 *
 * CREATE TABLE products (
 *      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 *      name VARCHAR(50) NOT NULL,
 *      modelnumber VARCHAR(15) NOT NULL,
 *      series VARCHAR(30) NOT NULL
 * );
 *  - VARCHAR, INT, DOUBLE
 *  - NOT NULL, AUTO_INCREMENT, PRIMARY KEY
 *
 * DESCRIBE products;
 *
 * INSERT INTO products (name, modelnumber, series) VALUES
 *      ('Eric Clapton Stratocaster', '0117602860', 'Artist'),
 *      ('Jeff Beck Stratocaster', '0119600805', 'Artist'),
 *      ('American Deluxe Stratocaster', '011900', 'American Deluxe'),
 *      ('American Deluxe Tele', '011950', 'American Deluxe'),
 *      ('Jim Adkins JA-90 Telecaster Thinline', '0262350538', 'Artist'),
 *      ('Vintage Hot Rod 57 Strat', '0100132809', 'Vintage Hot Rod'),
 *      ('American Vintage 57 Stratocaster Reissue', '0100102806', 'American Vintage'),
 *      ('American Standard Stratocaster', '0110400700', 'American Standard'),
 *      ('Road Worn Player Stratocaster HSS', '0131610309', 'Road Worn'),
 *      ('Road Worn Player Telecaster', '0131082306', 'Road Worn');
 *
 */

var fs = require('fs');
var connect = require('connect');
var mysql = require('mysql');
var ejs = require('ejs');

var client = mysql.createConnection({
    user: 'root',
    //password: 'password',
    database: 'Company'
});

// 8.4.1 데이터 표시
connect.createServer(connect.bodyParser(), connect.router(function (app) {
    // GET - /List
    app.get('/', function (request, response) {
        fs.readFile('List.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error:');
            } else {
                client.query('SELECT * FROM products', function (error, result) {
                    if (error) {

                    } else {
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.end(ejs.render(data, {data: result}));
                    }
                });
            }
        });
    });

    // GET - /DELETE/:id
    app.get('/Delete/:id', function (request, resonse) {});

    // GET - /INSERT
    app.get('/Insert', function (request, resonse) {});

    // PORT - /INSERT
    app.post('/Insert', function (request, resonse) {});

    // GET - /EDIT/:id
    app.get('/Edit/:id', function (request, resonse) {});

    // POST - /EDIT
    app.post('/Edit', function (request, resonse) {});
})).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
