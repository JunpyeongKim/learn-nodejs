/**
 * 5.3 이벤트 제거
 *
 * removeListener(eventName, eventHandler)
 * removeAllListeners([eventName])
 *
 */

var onUncaughtException = function (error) {
    console.log('onUncaughtException():');

    process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

setInterval(function () {
    error.error.error('error...');
}, 2000);