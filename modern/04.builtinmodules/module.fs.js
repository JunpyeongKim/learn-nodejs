/**
 *
 * 4.5 File System 모듈
 * - 4.5.1 파일 읽기 & 4.5.3 예외 처리
 *
 * asynchronous and synchronous
 * - readFile(file, encoding, callback)
 * - readFileSync(file, encoding)
 * - writeFile(file, data, encoding, callback)
 * - writeFileSync(file, data, encoding)
 *
 */

var fs = require('fs');

//var filename = 'textfile.txt';
var filename = 'textfile2.txt'; // exception

// Synchronous
// - try~catch
try {
    var text = fs.readFileSync(filename, 'utf8');
    console.log('readFileSync():', text);
} catch (e) {
    console.log('readFileSync(), exception:', e);
}

// Asynchronous
// - the first parameter, i.e. error of a callback function
fs.readFile(filename, 'utf8', function (error, data) {
    if (error) {
        console.log('readFile(), error:', error);
    } else {
        console.log('readFile():', data);
    }
});

