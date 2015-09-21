/**
 * 8.4 MySQL 모듈을 이용한 CRUD 구현
 * - 8.4.1 데이터 표시
 * - 8.4.2 데이터 삭제
 * - 8.4.3 데이터 추가
 * - 8.4.4 데이터 수정
 *
 * $ npm install connect@1.8.5 ejs mysql
 *
 * CREATE TABLE tbl_name (attribute type, ...)
 *  - VARCHAR, INT, DOUBLE
 *  - NOT NULL, AUTO_INCREMENT, PRIMARY KEY
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

// Connect's Middleware: Body Parser & Router
connect.createServer(connect.bodyParser(), connect.router(function (app) {
    // 8.4.1 데이터 표시
    // GET - /List
    app.get('/', function (request, response) {
        fs.readFile('List.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(List.html)', error);
            } else {
                client.query('SELECT * FROM products', function (error, result) {
                    if (error) {
                        console.log('Error: SELECT,', error);
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
        client.query('DELETE FROM products WHERE id = ?', [request.params.id], function (error, result) {
            if (error) {
                console.log('Error: DELETE,', error);
            } else {
                console.log(result);
                /*
                 {
                     fieldCount: 0,
                     affectedRows: 1,
                     insertId: 0,
                     serverStatus: 2,
                     warningCount: 0,
                     message: '',
                     protocol41: true,
                     changedRows: 0
                 }
                 */
                response.writeHead(302, {'Location': '/'});
                response.end();
            }
        });
    });

    // 8.4.3 데이터 추가
    // GET - /INSERT
    //  My Guitar, 0104804, RintSeries
    app.get('/Insert', function (request, response) {
        fs.readFile('Insert.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(Insert.html)', error);
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
            [body.name, body.modelnumber, body.series],
            function (error, result) {
                if (error) {
                    console.log('Error: INSERT,', error);
                } else {
                    console.log(result);
                    /*
                     {
                         fieldCount: 0,
                         affectedRows: 1,
                         insertId: 11,
                         serverStatus: 2,
                         warningCount: 0,
                         message: '',
                         protocol41: true,
                         changedRows: 0
                     }
                     */
                    response.writeHead(302, {'Location': '/'});
                    response.end();
                }
            });
    });

    // 8.4.4 데이터 수정
    // GET - /EDIT/:id
    app.get('/Edit/:id', function (request, response) {
        fs.readFile('Edit.html', 'utf8', function (error, data) {
            if (error) {
                console.log('Error: readFile(Edit.html)', error);
            } else {
                client.query('SELECT * FROM products WHERE id = ?', [request.params.id],
                    function (error, results) {
                        if (error) {
                            console.log('Error: SELECT id =', request.params.id, ',', error);
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
            function (error, result) {
                if (error) {
                    console.log('Error:');
                } else {
                    console.log(result);
                    /*
                     {
                         fieldCount: 0,
                         affectedRows: 1,
                         insertId: 0,
                         serverStatus: 2,
                         warningCount: 0,
                         message: '(Rows matched: 1  Changed: 1  Warnings: 0',
                         protocol41: true,
                         changedRows: 1
                     }
                     */
                    response.writeHead(302, {'Location': '/'});
                    response.end();
                }
            });
    });
})).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
