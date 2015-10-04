/**
 * B.1 파일처리 - Async 모듈(1)
 *
 * $ npm install async
 *
 * Methods (ECMAScript 5 Array 객체 메서드와 사용 방법 동일)
 * - forEach(), map(), filter(), reject(), reduce(), detect(), sortByv, some(), every(), concat()
 *  - the first param : Array
 *  - the last param : callback
 *
 */

var fs = require('fs');
var async = require('async');

var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

///*
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
                        console.log('----------------------------');
                        console.log('fs.readFile():');
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

/* ???
async.forEach(files, function (item) {
    console.log('----------------------------');
    console.log('async.forEach():\n', item);
});
//*/

///*
async.map(files, fs.readFile, function (error, results) {
    if (error) {
        console.error('Error: fs.readFile,', error);
    } else {
        console.log('----------------------------');
        console.log('async.map(fs.readFile):\n', results);
        console.log(results.toString());
    }
});
//*/

///*
async.map(files, fs.stat, function (error, results) {
    if (error) {
        console.error('Error: fs.stat, ', error);
    } else {
        console.log('----------------------------');
        console.log('async.map(fs.stat):\n', results);
    }
});
//*/