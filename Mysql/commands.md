## list all databases
`show databases;`

## create a database
`create database nameofdb;`
`eg:  
create database blogging;`

## Starrt working on a database
__use  nameofdatabase__
`use Blogging;`

## To delete a database
__drop database nameofdatabase;__
`Drop database blogging;`
## to see tables:
__show tables;__
`use Blogging;  
show tables;
`
## create table
__create table tablename (
    attribute name  attribute type  extra-properties,
    attribute2 name  attribute2 type  extra-properties2
);
` CREATE TABLE blogs(
    title varchar(30) 
    id int
    content varchar(1200)
); ` 
Eg:  
` CREATE TABLE Actors(
     Name Varchar(20),
     Gender ENUM("Male", "Female","Transgeder"),
     Charges Decimal);`

`create table actors(
     name varchar(20) not null,
     geder enum("male", "female", "transgender") not null,
     charges Decimal,
     id int auto_increment,
     primary key(id));  `

->*auto_increment automatically increases the prev id by one to ->create new id for next entry*  


*->throws error when trying oi create the same table again
to void it use the following:*  


`create table if not exists actors(
    -> name varchar(20) not null,
    -> geder enum("male", "female", "transgender") not null,
    -> charges Decimal,
    -> id int auto_increment
    -> , primary key(id));  `


## to delete a table  
`drop table nameoftable;`  

eg: `drop table blogging;`  

## To describe a table
what are the types of content the table is cotaining, exrtra properties, their datatypes etc.
`Desc tablename;  `  
or  
`Describe tablename  `
## INSERT the data in a table
`insert into name-of-table(name, charges, gender) values(val1, vall2, val3);  `
## Retrieve everything from the table
` select <attribute1> <attribute2> from tablename;`  
*to gettig all he attributes of the table we use: *  
`select * from <tablename>;`