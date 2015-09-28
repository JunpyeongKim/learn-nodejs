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

## 7.3 MySQL
- 여러 개의 확장 모듈 존재
- node-mysql


    $ npm install mysql --save

    $ sudo mysql
    
    [MySQL]
    CREATE DATABASE memo-mysql;
    USE memo-mysql;
    CREATE TABLE memo {
        _id int(11) NOT NULL AUTO_INCREMENT,
        author varchar(20) NOT NULL,
        contents text NOT NULL,
        date timestamp NOT NULL DEFAULT,
        CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (_id)
    };
    