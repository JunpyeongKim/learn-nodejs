/**
 * 5.4 이벤트 강제 발생
 *
 * emit(event, [arg1], [arg2], [...])
 *
 */

process.on('exit', function () {
    console.log('exit...');
});

// turn on/off
//process.exit();  // force the program to stop.
    // the following code after calling process.exit() would not be executed.

process.emit('exit');  // Only eventHandler would be executed.
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('running...');
