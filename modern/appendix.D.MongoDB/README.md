# Appendix D. MongoDB
- Spider Monkey (Firefox JavaScript Engine)
- http://www.mongodb.org
- JavaScript를 사용하여 데이터베이스를 관리


Windows
1. Install
2. $ mongod
3. $ mongo

Ubuntu
(*) UTF8: Unsupported
1. $ sudo apt-get install mongodb
2. $ mongo

Mac OS X
1. Install
2. $ sudo mkdir -p ~/apps/mongodb-osx-x86_64-3.0.3/data/db
    - $ sudo mkdir -p /Users/$USER/apps/mongodb-osx-x86_64-3.0.3/data/db
3. $ sudo chown $USER ~/apps/mongodb-osx-x86_64-3.0.3/data/db
4. $ mongod --dbpath ~/apps/mongodb-osx-x86_64-3.0.3/data/db
5. $ mongo

## D.2 MongoDB 
### D.2.1 데이터베이스기본와 컬렉션
> use node
    - 자동으로 node 라는 데이터베이스가 생성

> db

> db.createCollection('products')

### D.2.2 데이터 저장
> db.products.save({ name: 'pencil', price: 500 })
    > db.products.save({ name: 'eraser', price: 500 })
    > db.products.save({ name: 'notebook', price: 2000 })
    > db.products.save({ name: 'glue', price: 700 })
    > db.products.save({ name: 'scissors', price: 2000 })
    > db.products.save({ name: 'stapler', price: 3000 })
    > db.products.save({ name: 'pen', price: 1000 })
    > db.products.save({ name: 'brush', price: 2000 })
    > db.products.save({ name: 'knife', price: 500 })
    > db.products.save({ name: 'protractor', price: 500 })

### D.2.3 데이터 검색
> db.products.find()

> db.products.find({}, { _id: false })

> db.products.find({ price: 500 }, { _id: false })

> db.products.findOne()

### D.2.4 데이터 정렬
// Ascending
> db.products.find({ price: 500 }, { _id: false }).sort({ name: 1 })

// Descending
> db.products.find({}, { _id: false }).sort({ price: -1 })

### D.2.5 특정 위치에 있는 데이터 선택
> db.products.find().sort({ price: 1 }).limit(3)

> db.products.find().sort({ price: 1 }).skip(3).limit(2)

### D.2.6 데이터 수정
> var temp = db.products.findOne({ name: 'knife' })
> temp
> temp.price = 700
> db.products.save(temp)
    // db.collection.update(criteria, objNew, upsert, multi)
    > db.products.update({ name: 'knife' }, { $set: { price: 500 } }, false, false)

### D.2.7 데이터 삭제
> db.products.remove({ name: 'protractor' })
> db.products.remove()

(*) db.dropDatabase()

## D.3 mongojs 모듈
- https://github.com/gett/mongojs
- $ npm install mongojs

### How to use
var db = require('mongojs').connect('node', ['products']);

db.products.find(function (error, data) {
    console.log(data);
});
