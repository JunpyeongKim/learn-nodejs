# 2. Your First Express App


## 2.1 Your first Express app

    $ mkdir express-app
    $ cd express-app

    
### The Express Manifest File
    $ vi package.json

- http://package.json.nodejitsu.com
    - name : 모듈 이름
    - version : 모듈 버전
    - private : npm 레지스트리 공개 등록 여부
    - scripts : npm 명령어록
    - dependencies : 앱이 사용하는 노드 모듈 목


    $ npm install

- scratch 완성

### A very basic Express app
    $ vi app.js
    $ node app

### Express app with views
- 뷰 코드의 수정 내용은 서버의 시작 요청 없이도 HTML 결과에 즉시 반영된다
- Express 는 노드에서 동작하는 모든 템플릿 언어를 지원 


    $ mkdir views
    $ vi index.jade
    $ vi hello.jade

## 2.2 Auto-generating an Express app
- 특정 폴더를 지정하지 않으면 현재 폴더가 앱을 생성할 폴더로 지정된다
    - skeleton app 생성 


    $ express ./auto-express

### Middleware
- https://github.com/senchalabs/connect#middleware
    - router
    - logger
    - compress : gzip/deflate
    - basicAuth
    - json : application/json 타입의 데이터 파싱
    - urlencoded : application/x-www-form-urlencoded 타입의 데이터 파싱
    - multipart : multipart/form-data 타입의 데이터 파싱
    - bodyParser : json, urlencodered, multipart 미들웨어를 함께 묶기
    - timeout : timeout 요청 
    - cookieParser
    - session
    - cookieSession : 쿠키 기반의 세션
    - methodOverride
    - responseTime : 서버 응답 시간 표시
    - static : 정적 assets 폴더 지정
    - staticCache : static middleware를 위한 캐시
    - directory : 폴더 목록화
    - vhost
    - favicon
    - limit : request body 크기 제한
    - query
    - errorHandler : 서버 에러를 HTML 형태의 스택 트레이스로 생성


    $ npm install response-time --save
    $ npm install errorhandler --save
    (*) $ npm search module-name

    $ vi config.ini
    $ npm install iniparser --save  # 실제로 추천하는 방법은 아니다. 
    
## Logging requests to the App
- token
    - :req[header]
    - :res[header]
    - :http-version
    - :response-time
    - :remote-addr
    - :date
    - :method
    - :url
    - :referrer
    - :user-agent
    - :status
    - ex) app.use(express.logger({ format: ':remote-addr :method :url' }));
- default, short, tiny, dev
    - ex) app.use(express.logger('dev'));
- stream 옵션 : 파일로 출력 가능
    - ex) app.use(express.logger({ format: 'tiny',
                                   stream: fs.createWriteStream('app.log', { flags: 'w' })
                                }));

## Using a configuration file
- .ini 파일 사용 <-- 실제로 추천하는 방법은 아니다
- Node.js는 JSON-based Configuration File 사용 제공

## Setting and getting application options
- env
- trust proxy
- jsonp callback name
- json replacer
- json spaces
- case sensitive routing
- strict routing
- view cache
- view engine
- views

## Express in different environments
- development
- UAT (User Acceptance Testing)
- staging
- production, and so on
- (*) 동작 원리
    - process.env 객체에 포함된 NODE_ENV 환경 변수를 찾아 이를 'env' 에 할당하고 찾지 못하면 'development' 로 하당한다
    - NODE_ENV 는 app.set()/get() 을 이용하여 설정 및 획득
    - development : default
- 시스템이 Express 에게 환경변수를 전달하는 것을 추천
    - app.set('env', ...) 을 이용하는 것은 좋지 않다


    (1)
    $ export NODE_ENV=production
    $ node app
    
    (2) 
    $ echo export NODE_ENV=production >> ~/.bash_profile
    
    (3)
    $ NODE_ENV=production node app
    $ NODE_ENV=test node app
    

