# 7. 데이터 다루기 확장 모듈

## 7.1 mongoose


    $ express memo-mongoose
    $ cd memo-mongoose && npm install
    ($ npm link mongoose)
    $ npm install mongoose --save

## 7.2 Mongolian
- 정식 이름 : Mongolian DeadBeef
- Native MongoDB Driver를 사용하여 MongoDB에 가깝게 구성
- node-buffalo 라는 BSON/Message 직렬화 확장 모듈을 사용하여 node.js 로만 개발
- ORM 기반이 아님
- _id 를 BSON으로 변환한다.


    $ npm install mongolian --save
    