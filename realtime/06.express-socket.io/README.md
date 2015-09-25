# 6. 웹 애플리케이션 개발 확장 모듈

## nodemon 
- node monitor


    $ sudo npm install nodemon -g
    $ nodemon app.js


## supervisor
- nodemon 과 유사


    $ sudo npm install supervisor -g
    $ supervisor app.js

## express


    $ sudo npm install express -g
    $ sudo npm install express-generator -g
    
    $ express [project]
    $ cd [project] && npm install
    
    $ node app
    
    or
    
    $ PORT=1234 node app
    
    or
    
    $ export PORT=1234
    $ node app


__Example__

    $ express bingo
    $ cd bingo && npm install
    
    [new]
    public/
           javascripts/
                       main.js
                       jquery.js
    views/
          main.jade
    
    [modified]
    app.js
    routes/index.js
    views/layout.jade

    
