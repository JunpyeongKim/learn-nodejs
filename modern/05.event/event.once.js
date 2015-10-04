/**
 * 5.3 이벤트 제거
 *
 * once(eventName, eventHandler)
 *
 */

process.once('uncaughtException', function (error) {
    console.log('uncaughtException');
});

setInterval(function () {
    error.error.error('error...');
}, 2000);