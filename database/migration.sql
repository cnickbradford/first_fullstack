 DROP TABLE stats;
 DROP TABLE class;
 
 CREATE TABLE class (
     id serial,
     name varchar(20),
     main_stat varchar(20)
   );

CREATE TABLE stats (
    id serial,
    name varchar(20),
    description varchar(70)
);

-- CREATE TABLE comment (
--     id serial,
--     comment text,
--     class_id int 
-- )