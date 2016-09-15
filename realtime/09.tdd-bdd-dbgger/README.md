# 9. 확장 모듈을 이용한 품질 개선

## 9.1 expresso
- TDD 프레임워크
    - 각 메서드 단위로 테스트 
- node-jscoverage 라는 코드 커버리지 확장 모듈 포함 


    $ sudo npm install expresso -g
    
    $ expresso test/a.test.js test/b.test.js
    $ expresso --only "foo()" --only "bar()"
    $ expresso --only "foo(), bar()"
    $ expresso test/*
    $ expresso
        - test/* : default path
    $ expresso --include lib test/*
    
    [coverage]
    $ node-jscoverage lib lib-cov
    $ expresso -I lib-cov test/*
    --> $ expresso -I lib --cov test/*

    [coverage in json]
    $ expresso -I lib --cov --json coverage.json test/*

__Example__

    [app.js]
    var server = http.createServer(app);
    module.exports = server;    // for expresso test
    if (!module.parent) {
        server.listen(app.get('port'));
    }
    
    [app.js in coverage]
    $ node-jscoverage memo memo_cov --exclude=node_modules
    
    write tests/server.test.js
    
    $ node app.js
    $ expresso tests/*

----------------------------------------------------------------------

## 9.2 Vows
- BDD 프레임워크
    - 애플리케이션을 이용하는 행위를 테스트
- Test Case == Spec
    - addBatch() 이용
    - Chaining 가능
    - JSON 형식
        - Key-Value --> Context 라고 한다.
        - Context = 1개 topic + 다수의 vows
            - Topic : 테스트 대상
            - Vows : topic 결과를 이용하여 테스트 성공 여부를 판단 
    - Batch : 순서대로 실행
    - Context : 동시에 실행 
- Test Suite
    - 다수의 Test Case 묶음
    - 하나의 파일에 작성


    $ sudo npm install vows -g
    
    $ node divide-by-zero-test.js


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
    