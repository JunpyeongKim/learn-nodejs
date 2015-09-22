/**
 * B.2 코드 흐름 관리 - Async 모듈(2)
 *
 * $ npm install async
 *
 * series(Array | Object, lastFunction)
 * parallel(Array | Object, lastFunction)
 *
 */

var fs = require('fs');
var async = require('async');

var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

/*
fs.readFile(files[0], 'utf8', function (error, data1) {
    if (error) {
        console.error('Error: readFile()', error);
    } else {
        fs.readFile(files[1], function (error, data2) {
            if (error) {
                console.error('Error: readFile()', error);
            } else {
                fs.readFile(files[2], function (error, data3) {
                    if (error) {
                        console.error('Error: readFile()', error);
                    } else {
                        console.log('fs.readFile()----------------------------\n');
                        console.log(data1);
                        console.log(data2.toString('utf8'));
                        console.log(data3.toString());
                        console.log(data3);
                    }
                });
            }
        });
    }
});
//*/

// result --> Object
/*
async.series([
    function (callback) {
        console.log('First Function');
        callback(null, 1);
    },
    function (callback) {
        console.log('Second Function');
        callback(null, 2);
    },
    function (callback) {
        console.log('Third Function');
        callback(null, 3);
    }
], function (error, result) {
    console.log('Last Function:', result);
});
//*/

// result --> Object
/*
async.series({
    first: function (callback) {
        console.log('First Function');
        callback(null, 1);
    },
    second: function (callback) {
        console.log('Second Function');
        callback(null, 2);
    },
    third: function (callback) {
        console.log('Third Function');
        callback(null, 3);
    }
}, function (error, result) {
    console.log('Last Function:', result);
});
//*/

// result --> Array
/*
async.parallel([
    function (callback) {
        console.log('First Function Start');

        setTimeout(function () {
            console.log('First Function End');
            callback(null, 1)
        }, 2000);
    },
    function (callback) {
        console.log('Second Function Start');

        setTimeout(function () {
            console.log('Second Function End');
            callback(null, 2)
        }, 1000);
    }
], function (error, result) {
    console.log('Last Function:', result);
});
//*/

// result --> Object
///*
async.parallel({
    first: function (callback) {
        console.log('First Function Start');

        setTimeout(function () {
            console.log('First Function End');
            callback(null, 1)
        }, 2000);
    },
    second: function (callback) {
        console.log('Second Function Start');

        setTimeout(function () {
            console.log('Second Function End');
            callback(null, 2)
        }, 1000);
    }
}, function (error, result) {
    console.log('Last Function:', result);
});
//*/