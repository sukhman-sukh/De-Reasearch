# De-Reasearch
Eth Global decentralised Data dao application for storing and hosting research papers


CREATE TABLE paperData (
    userId varchar(255) ,
    cid varchar(255) ,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    title varchar(255) ,
    author varchar(255) ,
    description varchar(255) 
);