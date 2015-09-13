/**
 * Created by Junpyeong Kim on 2015. 9. 13..
 *
 * 3.4 exports 객체와 모듈
 * - 모듈 == 자바스크립트
 *
 */

var mymodule = require('./mymodule.js');
//var mymodule = require('./mymodule');  // mymodule.js --> mymodule/index.js

console.log('abs(-273) = %d', mymodule.abs(-273));
console.log('circleArea(3) = %d', mymodule.circleArea(3));