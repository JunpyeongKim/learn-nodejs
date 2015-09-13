/**
 * Created by Junpyeong Kim on 2015. 9. 13..
 *
 * 3.4 exports 객체와 모듈
 * - 모듈 == 자바스크립트 파일
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