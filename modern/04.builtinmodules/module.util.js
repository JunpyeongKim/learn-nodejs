/**
 * 4.4 util 모듈
 * - 보조적인 기능을 모아둔 모듈
 *
 * format()
 * - 문자열을 반환
 *
 */

var util = require('util');

var data = util.format('%d + %d = %d', 52, 273, 52 + 273);
console.log(data);
