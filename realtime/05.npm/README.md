# 5. npm으로 확장 모듈 이용하기
- http://npmjs.org
- /usr/local/lib/node_modules
- /usr/local/bin
- /usr/local/share/man

global (recommended)
- nodemon
- forever
- expresso
- express


$ npm -v

$ sudo npm install module_name -g

$ npm list [-g]

$ npm install module_name

$ npm install module1, module2, ...

$ npm install module@version

$ npm uninstall module_name

$ npm search module_name

$ npm info module_name

$ npm init
    - package.json
        - name
            - name: foo
        - version
        - description
        - keywords
        - homepage
        - author
        - contributors
        - repository
        - scripts
        - config
            - config: { port: "8080" }
        - private
        - dependencies
        - devDependencies
        - engine
    - $ npm start
    - http.createServer().listen(process.env.npm_package_config_port);
    - $ npm config set foo:port 80

$ npm update {module_name}


