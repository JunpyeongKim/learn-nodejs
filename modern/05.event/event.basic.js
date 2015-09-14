/**
 * 5.1 이벤트 연결
 *
 * addEventListener(eventName, eventHandler)
 * on(eventName, eventHandler)
 * - Event Name / Event Type
 *
 */

//process.addEventListener('exit', function () {
process.on('exit', function () {
    console.log('exit: Good bye...');
});

process.on('uncaughtException', function (error) {
    console.log('uncaughtException');
});

var count = 0;
var id = setInterval(function () {
    count++;

    if (count === 3) {
        clearInterval(id);
    }

    // 예외를 강제로 발생시킨다.
    error.error.error();
}, 2000);
