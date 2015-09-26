# Appendix.A 다양한 npm 소개

## 1. 웹 개발 프레임워크

### 1.1 Yahoo! Mojito
- mojit = Module + Widget
    - 실행 유닛
    - MVC 구조
    - Definition & Instance Configuration 으로 구성


    $ sudo npm install mojito -g

__Example__

    $ mojito create app hello_world     # App.
    $ cd hello_world
    $ mojito create mojit myMojit       # mojit
    
    YUI.add('myMojit', function (Y, NAME) {
        Y.namespace('mojito.controllers')[NAME] = {
            index: function (ac) {
                ac.done('Hello, World!');
            }
        };
    });

    $ mojito start
    
    open http://localhost:8666/@myMojito/index

### 1.2 Meteor
- 최고 수준의 웹 애플리케이션을 만들수 있는 오픈 소스 플랫폼
- 특징
    - 라이브 페이지 업데이트
- http://meteor.com


    $ curl https://install.meteor.com | sh
    
__Example__

    $ meteor create --example leaderboard
    $ cd leaderboard
    $ meteor


### 1.3 CompoundJS
- Express 기반
- Ruby on Rails 와 비슷한 방식으로 개발
- http://compoundjs.com


    $ sudo npm install compound -g
    
__Example__

    $ compound init blog && cd blog
    $ npm install -l
    $ compound generate crud post title content
    $ compound server 8888
    
    open http://127.0.0.1:8888/posts


### 1.4 stylus
- CSS만을 위한 템플릿 엔진


    $ sudo npm install stylus -g


__Example__

    [stylus]
    body
        font: 12px Helvetica, Arial, sans-serif;
    
    a.button
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    
    [css]
    body {
        font: 12px Helvetica, Arial, sans-serif;
    }
    a.button {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }


--------------------------------------------------

## 2. CMS
- Content Management System
    - 블로그나 게시판 같은 시스템을 쉽게 만들고 관리할 수 있도록 도와주는 시스템

### 2.1 Calipso
- MongoDB 기반
- https://github.com/cliftonc/calipso


    $ sudo npm install calipso -g
    
__Example__

    $ calipso site ./site
    $ cd site
    $ calipso server
    
    open http://localhost:3000/admin/install
    - mongodb://localhost/calipso
    - Admin account
    - Add Additional Features


### 2.2 DOCPAD
- 파일 시스템에만 의존


    $ sudo npm install docpad -g
    
__Example__

    $ mkdir docpad_sample
    $ cd docpad_sample
    $ docpad run
    
    Select 9) NodeChat
    
    open http://localhost:9778
    
--------------------------------------------------

## 3. 인증과 사용자 관리

### 3.1 everyauth
- Express 와 잘 연동
- https://github.com/bnoguchi/everyauth


    $ npm install everyauth


### 3.2 passport
- Express 와 잘 연동
- http://passportjs.org


    $ npm install passport

--------------------------------------------------

## 4. 압축 관련

### 4.1 node-zip
- https://github.com/daraosn/node-zip


    $ npm install node-zip

__Example__

    [compress]
    var zip = new require('node-zip');
    zip.file('test.file', 'hello there');
    var data = zip.generate({ base64: false, compression: 'DEFLATE' });
    console.log(data);
    
    [uncompress]
    var zip = new require('node-zip')(data, { base64: false, checkCRC32: true });
    console.log(zip.files['test.file']);


### 4.2 UglifyJS
- JavaScript를 위한 Parser/Compressor/Beautifier 기능 제공
- AST(Abstract Syntax Tree) 단위로 상세시 분석
- https://github.com/mishoo/UglifyJS


    $ sudo npm install uglify-js -g
    
    [testcode.js]
    function fillTemplates(responsedat, status, xhr) {
        if (status === 'success') {
            template = $('#template').html();
            alert(template);
        }
    }
    
    $(function () {
        fillTemplates(null, 'success', null);
    });
    
    $ uglifyjs testcode.js -o testcode.compressed.js
    
    [testcode.compressed.js]
    

--------------------------------------------------

## 5. 로그/성능 분석
- 실시간 모니터링

### 5.1 log.io
- 웹브라우저에서 실시간으로 로그를 모니터링
- 원리
    - Harvester가 로그 파일을 계속 감시
    - 변화가 감지되면 로그를 서버로 보낸다.
- Linux 에서 사용 가능


    $ sudo npm install log.io -g
    
    $ log.io-server
    $ log.io-harvester
    
    open http://localhost:28778
    
    [~/.log.io/harvester.conf]
    exports.config = {
        nodeName: "application_server",
        logStreams: {
            apache: [
                "/var/log/apache2/access.log",
                "/var/log/apache2/error.log"
            ]
        },
        server: {
            host: '0.0.0.0',
            port: 28777
        }
    };


### 5.2 Nodetime
- Performance profiler & monitor
- http://nodetime.com
- nodetime에서 제공하는 웹서비스를 통해서만 모니터링 가능


    $ npm install nodetime
    
    [your.app.js]
    require('nodetime').profile();
    
    open https://nodetime.com/[session_id]


--------------------------------------------------

## 6. 기타

### 6.1 node-ftp
- FTP Client Module


    $ npm install ftp
    
__Example__

    var FTPClient = require('ftp');
    var c = new FTPClient();
    
    c.on('ready', function () {
        c.list(function (err, list) {
            if (err) {
                throw err;
            }
            console.dir(list);
            c.end();
        });
    });
    
    // connect to localhost:21 as anonymous
    c.connect();


### 6.2 npkg
- 다양한 플랫폼에 설치가능한 패키지를 만드는 크로스 플랫폼 설치 유틸리티
- https://github.com/wearefractal/npkg


    $ sudo npm install npkg -g

__Example__

    $ npkg [package.json's directory] [output directory (optional)]


### 6.3 PDFKit
- PDF 문서 생성
- CoffeeScript 사용


    $ npm install pdfkit

__EXample__
    
    PDFDocument = require 'pdfkit'
    .
    .
    

### 6.4 Chai
- BDD/TDD 지원
    - expresso, Vows 와 비슷
- Interface
    - should
    - expect
    - assert
- http://chaijs.com


    $ npm install chai