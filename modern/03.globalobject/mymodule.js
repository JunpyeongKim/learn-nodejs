/**
 * 3.4 exports 객체와 모듈
 *
 * Module == JavaScript File
 *
 * 모듈 생성 : exports 객체 사용
 * 모듈 추출 : require() 함수 사용
 *
 */

exports.abs = function (number) {
    if (0 < number) {
        return number;
    } else {
        return -number;
    }
};

exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
};