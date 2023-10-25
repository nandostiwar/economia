CREATE DATABASE restaurant_db; 

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    user_role VARCHAR(255)
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    product VARCHAR(255),
    price VARCHAR(255)
);

CREATE TABLE sellings(
    product_id SERIAL PRIMARY KEY,
    product VARCHAR(255),
    amount VARCHAR(255),
    price VARCHAR(255),
    total VARCHAR(255)
);