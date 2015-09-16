/**
 * 4.2 url 모듈
 *
 * parse(urlStr [, parseQueryString=false, slashesDenoteHost=false])
 * - String --> Object
 *
 * format(urlObj)
 * - Object --> String
 *
 * resolve(from, to)
 * - 완전한 URL 문자열을 생성
 *
 */

var url = require('url');

var parsedObject = url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log('url.parse(): ', parsedObject);
