/**
 * 5.2 이벤트 연결 개수 제한
 *
 * setMaxListeners(limit)
 * - default: 10
 *
 */

// try turnning on/off
//process.setMaxListeners(15);
//process.setMaxListeners(0);   // infinite

// Default: 10 event listeners / 1 event
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
process.on('exit', function () {});
    // (node) warning: possible EventEmitter memory leak detected.
    // 11 listeners added.
    // Use emitter.setMaxListeners() to increase limit.