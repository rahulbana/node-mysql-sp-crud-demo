# Node MySQL CRUD Demo with Stored Procedure

npm install

##create table using customer.sql

##set your database detail in .env fle

PORT=8081

DBHOST=localhost

DBNAME=customer

DBPWD=123456

DBUSER=root

DBPORT=3306

npm start

##DIfferent API Route

Get All Customer
GET - http://localhost:8081/api/user

Create Customer
POST - http://localhost:8081/api/user

Get Customer By Id
GET - http://localhost:8081/api/user/1

Update Customer By Id
PUT - http://localhost:8081/api/user/1

Delete Customer
Delete - http://localhost:8081/api/user/1
