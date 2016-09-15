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
    CREATE DATABASE memo_mysql;
    USE memo_mysql;
    CREATE TABLE memo (
        _id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        author varchar(20) NOT NULL,
        contents text NOT NULL,
        date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );


## 7.4 Redis
- 메모리 기반의 저장소 --> 실시간 서비스에 적합
    - 메모리를 캐시처럼 사용 
- Key-Value 저장소
- 디스크와 같은 비휘발성 매체에 정기적으로 데이터셋 스냅샷 파일을 저장
- Publisher/Subscriber 모델 제공 --> 채팅과 같은 메시징 처리에 활용 가능 


    [Redis]
    - http://redis.io/download#installation
    $ wget http://download.redis.io/releases/redis-3.0.4.tar.gz
    $ tar xzf redis-3.0.4.tar.gz
    $ cd redis-3.0.4
    $ make
    
    $ src/redis-server
    
    $ src/redis-cli
    redis> set foo bar
    redis> get foo
    
__Example__ (redis)

    $ npm install redis
    $ npm install hiredis redis
        - hiredis C library
        - non-blocking
    
    $ redis-server
    $ node redis[01 | 02]


__Example__ (chat-redis)

    $ {redis}/src/redis-server
    $ node app

## 7.5 MapReduce
- Sharding
    - 여러 대의 MongoDB에 수평적 분할을 하여 분산 처리를 해주는 기법
    - 구성 컴포넌트
        - shard server : 실제 데이터가 저장되는 MongoDB 서버
        - config server : Shard 설정이 저장되는 MongoDB 서버
        - mongos
            - routing 역할
            - 모든 client 는 mongos로 접속


__Example__ (mapreduce)

    $ mongod --dbpath data/db
    
    [sharding 구성]
    $ mongo
    > use admin;
    > db.runCommand({ addShard: "host_ip1:port" });
    > db.runCommand({ addShard: "host_ip2:port" });
    .
    .
    
    > db.runCommand({ listShards: 1 });
    
    > db.runCommand({ enablesharding: "dbname" });
    
    > db.runCommand({ shardcollection: "dbname.collection_name" }, key: { _id: 1 });
        - 분산 처리할 때 _id 값으로 구분하기 위해
    
    $ node insert_matches
    $ node score_ranking

