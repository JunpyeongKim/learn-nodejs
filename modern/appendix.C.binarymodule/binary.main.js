/**
 * Appendix.C 바이너리 모듈
 *
 * NODE_MODULE()
 * target->Set()
 * NODE_SET_METHOD()
 *
 * V8 JavaScript Engine Syntax
 * - https://developers.google.com/v8/embed
 *
 * wscript
 * - $ node-waf configure build
 *  - build/Release/*
 *
 * $ node binary.main
 *
 */

var rint = require('./build/Release/module_name');

console.log(rint);
console.log(rint.method(10000));
//console.log(rint.method(1000000000));