CREATE DATABASE app;

\c app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR (100) UNIQUE NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    like INTEGER,
    comment TEXT, 
    description TEXT, 
    image_url text 
    id_user INTEGER REFERENCES users(id) ON DELETE SET NULL
);
