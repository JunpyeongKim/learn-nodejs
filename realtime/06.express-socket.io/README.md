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
    routes/
           main.js
    views/
          main.jade
    
    [modified]
    app.js
    routes/index.js
    views/layout.jade

## Jade
- HTML --> Jade
    - http://html2jade.aaron-powell.com


    [tag]
    html --> <html></html>

    [hierarchy]
    html
        body
    
    [id]
    div#divisionElement1 --> <div id="divisionElement1"></div>
    #divisionElement1 --> <div id="divisionElement1"></div>
    
    [class]
    div.divStyle1.divStyle2 --> <div class="divStyle1 divStyle2"></div>
    
    [attribute]
    #contents(style="border:1px solid black;") --> <div id="contents" style="border:1px solid black;"></div>
    
    [text]
    div#divisionElement1 Hello Jade! --> <div id="divisionElement1">Hello Jade!</div>
    
    div#divisionElement1
        | Hello
        | Jade!
        
    --> <div id="divisionElement1">Hello Jade!</div>
    
    [dynamic contents]
    { name: 'Anonymous', age: '27', special: '<나 >'}
    
    div#userName #{name} --> <div id="userName">Anonymous</div>
    div#specialChar !{special} --> <div id="specialChar"><나 ></div>
    
    [<script> or <style>]
    script
        if (foo) {
            bar();
        } else {
            baz();
        }
    
    -->
     <script>
        if (foo) {
            bar();
        } else {
            baz();
        }
     </script>
     
     [single-line comment]
     //just some comments... --> <!-- just some comments -->
     //-just some comments... -->
     
     [block comment]
     //
        # childDiv
            h1 in block comments
     
     -->
     <!--
        <div> id="childDiv">
            <h1>in block comments</h1>
        </div>
     -->
