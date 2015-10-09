# 2. Your First Express App


    $ mkdir express-app
    $ cd express-app

    
## The Express Manifest File
    $ vi package.json

- http://package.json.nodejitsu.com
    - name : 모듈 이름
    - version : 모듈 버전
    - private : npm 레지스트리 공개 등록 여부
    - scripts : npm 명령어록
    - dependencies : 앱이 사용하는 노드 모듈 목


    $ npm install

- scratch 완성

## A very basic Express app
    $ vi app.js
    $ node app

## Express app with views
- 뷰 코드의 수정 내용은 서버의 시작 요청 없이도 HTML 결과에 즉시 반영된다
- Express 는 노드에서 동작하는 모든 템플릿 언어를 지원 


    $ mkdir views
    $ vi index.jade
    $ vi hello.jade

