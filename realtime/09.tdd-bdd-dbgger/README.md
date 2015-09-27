# 9. 확장 모듈을 이용한 품질 개선

## 9.1


----------------------------------------------------------------------

## 9.2

----------------------------------------------------------------------

## 9.3 node-inspector
- Node.js는 GDB를 이용한 디버깅 지원 
    - 이를 웹 브라우저에서 가능하도록 한 확장 모듈이 node-inspector
- WebKit의 개발자 도구를 이용하므로 Google Chrome or Apple Safari 에서 가능


    $ sudo npm install node-inspector -g
    
    [Application in debug mode]
    $ node --debug[=port] app
    or
    $ node --debug-brk[=port] app
    
    [node-inspector]
    $ node-inspector &


## 9.4 v8-profiler

    $ npm install v8-profiler
    
    [app.js]
    var profiler = require('v8-profiler');
    
    // Profiling
    profiler.startProfiling(labelProfile)
    .
    .
    targetFunc();
    .
    .
    profiler.stopProfiling(labelProfile)
    
    // Memory Snapshot
    profiler.takeSnapshot(labelSnapshot)
    .
    .
    leakFunc();
    .
    .
    profiler.takeSnapshot(labelSnapshot)
    