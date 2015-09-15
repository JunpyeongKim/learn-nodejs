/**
 * 4.3 Query String 모듈
 *
 * URL 모듈에 기능이 통합되어 있으므로 많이 사용되지 않는다.
 *
 * stringify(obj[, sep='&', eq='='])
 * parse(str[, sep='&', eq='='])
 *
 */

var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');

console.log('parsedObject:', parsedObject);

// query string --> object
console.log('parsedObject, true:', url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9', true));

console.log('parsedObject.query: ', querystring.parse(parsedObject.query));