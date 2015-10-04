/**
 *
 * 12. 실시간 물건 구매
 * - Connect Project
 *  - Real-time Purchasing Items
 *
 * $ npm install
 * $ node app
 *
 * open http://127.0.0.1:52273
 *
 */

var connect = require('connect');
var ejs = require('ejs');
var socketio = require('socket.io');
var fs = require('fs');

var counter = 0;

function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

var products = [
    new Product('JavaScript', 'chrome.png', 28000, 30),
    new Product('jQuery', 'chrome.png', 28000, 30),
    new Product('Node.js', 'chrome.png', 32000, 30),
    new Product('Socket.io', 'chrome.png', 17000, 30),
    new Product('Connect', 'chrome.png', 18000, 30),
    new Product('Express', 'chrome.png', 31000, 30),
    new Product('EJS', 'chrome.png', 12000, 30)
];

var server = connect.createServer();

server.use(connect.static(__dirname + '/Resources'));

server.use(connect.router(function (app) {
    try {
        var HTMLPage = fs.readFileSync('HTMLPage.html', 'utf8');
    } catch (e) {
        console.log(e);
        return;
    }

    app.get('/', function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(ejs.render(HTMLPage, {
            products: products
        }));
    });
}));

server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    function onReturn(index) {
        products[index].count++;

        clearTimeout(cart[index].timerID);

        delete cart[index];

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    }

    var cart = {};

    socket.on('cart', function (index) {
        products[index].count--;

        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function () {
            onReturn(index);
        }, 1000 * 60 * 10);

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    socket.on('buy', function (index) {
        clearTimeout(cart[index].timerID);

        delete cart[index];

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    socket.on('return', function (index) {
        onReturn(index);
    });
});