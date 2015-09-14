/**
 * 3.4 exports 객체와 모듈
 *
 * Module == JavaScript File
 *
 * 모듈 생성 : exports 객체 사용
 * 모듈 추출 : require() 함수 사용
 *
 */

var mymodule = require('./mymodule.js');
//var mymodule = require('./mymodule');  // mymodule.js --> mymodule/index.js

console.log('abs(-273) = %d', mymodule.abs(-273));
console.log('circleArea(3) = %d', mymodule.circleArea(3));