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
console.log('url.parse(urlStr):\n', parsedObject, '\n');

//console.log('url.parse(urlStr).query:\n', parsedObject.query);
console.log('querystring.parse(url.parse(urlStr).query):\n', querystring.parse(parsedObject.query), '\n');

// query string --> object
console.log('url.parse(urlStr, true):\n', url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9', true));
