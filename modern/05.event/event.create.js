/**
 * 5.5 이벤트 생성
 *
 * 이벤트를 연결할 수 있는 모든 객체는 EventEmitter 객체의 상속을 받는다.
 *
 * events.EventEmitter
 * - addListener(eventName, eventHandler)
 * - on(eventName, eventHandler)
 * - setMaxListeners(limit)
 * - removeListener(eventName, eventHandler)
 * - removeAllListeners([eventName])
 * - once(eventName, eventHandler)
 *
 * events.EventEmitter & process.EventEmitter
 *
 * 일반적으로 이벤트를 생성하는 부분과 연결하는 부분을 모듈로 분리해서 사용한다.
 *
 */

var custom = new process.EventEmitter();

custom.on('tick', function () {
    console.log('Event: "tick" ...');
});

custom.emit('tick');
