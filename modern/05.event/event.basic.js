/**
 * 5.1 이벤트 연결
 *
 * addListener(eventName, eventHandler)
 * on(eventName, eventHandler)
 * - Event Name / Event Type
 *
 */


process.addListener('exit', function () {
    console.log('addListener(exit): Good bye...');
});

process.on('exit', function () {
    console.log('on(exit): Good bye...');
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
