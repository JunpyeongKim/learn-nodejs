/**
 * 3.2 console 객체
 *
 * log()
 *  - %d, %s, %j
 * time(label)
 * timeEnd(label)
 *
 */

console.log('output: %d', 273);
console.log();

console.log('%d + %d = %d', 273, 52, 273 + 52, 52273);
console.log('%d + %d = %d %d', 273, 52, 273 + 52);
console.log();

console.log('숫자: %d + %d = %d', 273, 52, 273 + 52);
console.log('문자열: %s', 'Hello World...!', '특수 기호와 상관 없음');
console.log('JSON: %j', { name: 'RintIanTta'});
console.log();

/*
    문자열 '\u001b[숫자m' 이후 위치하는 모든 출력에 ANSI Code 가 적용된다.
    - 0 : 초기화
    - 1 : 색을 밝게
    - 30~37 : 글자 색 지정
    - 40~47 : 배경 색을 지정
    - https://en.wikipedia.org/wiki/ANSI_escape_code
 */
console.log('\u001b[31m', 'Hello World...!');
console.log('\u001b[32m', 'Hello World...!');
console.log('\u001b[33m', 'Hello World...!');
console.log('\u001b[34m', 'Hello World...!');
console.log('\u001b[35m', 'Hello World...!');
console.log('\u001b[36m', 'Hello World...!');
console.log('\u001b[1m');
console.log('\u001b[31m', 'Hello World...!');
console.log('\u001b[32m', 'Hello World...!');
console.log('\u001b[33m', 'Hello World...!');
console.log('\u001b[34m', 'Hello World...!');
console.log('\u001b[35m', 'Hello World...!');
console.log('\u001b[36m', 'Hello World...!');

// turn on/off
console.log('\u001b[0m');   // initialize
console.log('ANSI code ends');
