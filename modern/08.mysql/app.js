/**
 * 8.4 MySQL 모듈을 이용한 CRUD 구현
 * - 8.4.1 데이터 표시
 * - 8.4.2 데이터 삭제
 * - 8.4.3 데이터 추가
 * - 8.4.4 데이터 수정
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

connect.createServer(connect.bodyParser(), connect.router(function (app) {
    // 8.4.1 데이터 표시
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

    // 8.4.2 데이터 삭제
    // GET - /DELETE/:id
    app.get('/Delete/:id', function (request, response) {
        client.query('DELETE FROM products WHERE id = ?', [request.params.id]);

        response.writeHead(302, {'Location': '/'});
        response.end();
    });

    // 8.4.3 데이터 추가
    // GET - /INSERT
    //  My Guitar, 0104804, RintSeries
    app.get('/Insert', function (request, response) {
        fs.readFile('Insert.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error:');
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }
        });
    });

    // PORT - /INSERT
    app.post('/Insert', function (request, response) {
        var body = request.body;

        client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)',
            [body.name, body.modelnumber, body.series]);

        response.writeHead(302, {'Location': '/'});
        response.end();
    });

    // 8.4.4 데이터 수정
    // GET - /EDIT/:id
    app.get('/Edit/:id', function (request, response) {
        fs.readFile('Edit.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error:');
            } else {
                client.query('SELECT * FROM products WHERE id = ?', [request.params.id],
                    function (error, results) {
                        if (error) {
                            console.log('Error:');
                        } else {
                            response.writeHead(200, {'Content-Type': 'text/html'});
                            response.end(ejs.render(data, {
                                data: results[0]
                            }));
                        }
                    });
            }
        });
    });

    // POST - /EDIT
    app.post('/Edit/:id', function (request, response) {
        var body = request.body;

        client.query('UPDATE products SET name = ?, modelnumber = ?, series = ? WHERE id = ?',
            [body.name, body.modelnumber, body.series, request.params.id],
            function (error) {
                if (error) {
                    console.log('Error:');
                } else {
                    response.writeHead(302, {'Location': '/'});
                    response.end();
                }
            });
    });
})).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
