/**
 * 4.5 File System 모듈
 * - 4.5.2 파일 쓰기 & 4.5.3 예외 처리
 *
 * asynchronous and synchronous
 * - readFile(file, encoding, callback)
 * - readFileSync(file, encoding)
 * - writeFile(file, data, encoding, callback)
 * - writeFileSync(file, data, encoding)
 *
 */

var fs = require('fs');

var data = 'Hello World...';

var filename = 'TextFileOtherWrite.txt';
var filenamesync = 'TextFileOtherWriteSync.txt';
//var filename = '';  // exception
//var filenamesync = '';  // exception


// Synchronous
// - try~catch
try {
    fs.writeFileSync(filenamesync, data, 'utf8');
    //fs.writeFileSync('', data, 'utf8'); // exception
    console.log('writeFileSync(): Complete');
} catch (e) {
    console.log('writeFileSync(), exception:', e);
}

// Asynchronous
// - the first parameter, i.e. error of a callback function
fs.writeFile(filename, data, 'utf8', function (error) {
    if (error) {
        console.log('writeFile(), error:', error);
    } else {
        console.log('writeFile(): Complete');
    }
});