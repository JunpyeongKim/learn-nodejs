# 1. What is Express?
- Web Development Framework.
- Express Middleware 와 Node Module 을 Plug-in 형식으로 쉽게 연결 가능
 
## History
- 2009.02 : Ryan Dahl
    - V3 + CommonJS
- 2009.06 : TJ Holowaychuk
    - Express
    - Ruby Sinatra Framework 에서 영감 받음
- 2010.06 : Sencha
    - Connect
    - Ruby Rack Web Server 가 모태
- 2010.07 : TJ Holowaychuk
    - Express + Connect


## Install
- (*) NVM(Node Version Manager) 사용 추천
    - https://github.com/creationix/nvm


## 3개의 핵심 컴포넌트
- 1) Application Object
    - 관례적으로 가장 중요한 파일은 app.js
        - 파일 이름 변경은 권장하지 않는다.
- 2) Request Object

- 3) Response Object

## Middleware
- app.use() 이용하여 로드 
- middleware 선언 순선에 따라 차이가 있다.

## Request Flow
- HTTP Request 는 연속적으로 Express Middleware 를 순회한다
- HTTP Request --> favicon --> logger --> bodyParser --> methodOverride --> cookieParser --> session --> router --> HTTP Response
