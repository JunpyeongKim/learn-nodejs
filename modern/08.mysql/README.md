# 8. MySQL Database
- 웹에서 사용자 정보 저장 방법 3가지
1. Cookie
2. Session
3. Database

## 8.1 MySQL 설치
- Windows
Install --> MySQL Command Line Client

- Ubuntu
$ sudo apt-get install mysql-server mysql-client
$ mysql -u root -p  # MySQL Monitor

- Mac OS X
Install MySQL Community Server --> System Preferences --> Start MySQL Server
$ mysql
$ sudo mysql -u root

## 8.2 MySQL 기본
CREATE DATABASE db_name;
    - CREATE DATABASE Company;

USE db_name;
    - USE Company;
CRATE TABLE tbl_name (name type, ...);
    - CREATE TABLE products (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        modelnumber VARCHAR(15) NOT NULL,
        series VARCHAR(30) NOT NULL
      );

DESCRIBE tbl_name;
    - DESCRIBE products;

INSERT INTO tbl_name (field1, ...) VALUES (data1, ...);
    - INSERT INTO products (name, modelnumber, series) VALUES
        ('Eric Clapton Stratocaster', '0117602860', 'Artist'),
        ('Jeff Beck Stratocaster', '0119600805', 'Artist'),
        ('American Deluxe Stratocaster', '011900', 'American Deluxe'),
        ('American Deluxe Tele', '011950', 'American Deluxe'),
        ('Jim Adkins JA-90 Telecaster Thinline', '0262350538', 'Artist'),
        ('Vintage Hot Rod 57 Strat', '0100132809', 'Vintage Hot Rod'),
        ('American Vintage 57 Stratocaster Reissue', '0100102806', 'American Vintage'),
        ('American Standard Stratocaster', '0110400700', 'American Standard'),
        ('Road Worn Player Stratocaster HSS', '0131610309', 'Road Worn'),
        ('Road Worn Player Telecaster', '0131082306', 'Road Worn');
        
        

SELECT FROM WHERE ORDER BY LIMIT 
    - SELECT * FROM products;
    - SELECT id, name, series FROM products;
    - SELECT * FROM products WHERE series='Artist';
    - SELECT * FROM products WHERE (series='Artist') OR (series='Road Worn');
    - SELECT * FROM products WHERE modelnumber LIKE '011%';
    - SELECT * FROM products WHERE modelnumber LIKE '011___';
    - SELECT id, name, series FROM products ORDER BY name;
    - SELECT id, name, series FROM products ORDER BY name ASC;
    - SELECT id, name, series FROM products ORDER BY name DESC;
    - SELECT * FROM products LIMIT 2;
    - SELECT * FROM products LIMIT 2, 3;
    - SELECT series FROM products GROUP BY series;

UPDATE tbl_name SET field1=value1, ...;
    - UPDATE products SET name='American Deluxe Telecaster' WHERE id = 4;
    
DELETE FROM tbl_name WHERE conditions;
    - DELETE FROM products WHERE id = 10;
        - INSERT INTO products (name, modelnumber, series) VALUES
            ('Road Worn Player Telecaster', '0131082306', 'Road Worn');
    - DELETE FROM products;
    

DROP TABLE tbl_name;
    - DROP TABLE products;

DROP DATABASE db_name;
    - DROP DATABASE Company;

