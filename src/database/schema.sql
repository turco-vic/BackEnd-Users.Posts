CREATE DATABASE app;

\c app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (name, email, password) VALUES 
    ('Enzo', 'enzo@gmail.com', 'enzo123'),
    ('Alves', 'alves@gmail.com', 'alves123'),
    ('Turco', 'turco@gmail.com', 'turc0123');

INSERT INTO posts (title, content, user_id) VALUES 
    ('Post 1', 'Content of post 1', 1),
    ('Post 2', 'Content of post 2', 2),
    ('Post 3', 'Content of post 3', 3);

INSERT INTO users (name, email, password) VALUES
    ('Alice', 'alice@gmail.com', 'alice123'),
    ('Bob', 'bob@gmail.com', 'bob123'),
    ('Charlie', 'charlie@gmail.com', 'charlie123'),
    ('Diana', 'diana@gmail.com', 'diana123'),
    ('Eve', 'eve@gmail.com', 'eve123'),
    ('Frank', 'frank@gmail.com', 'frank123'),
    ('Grace', 'grace@gmail.com', 'grace123'),
    ('Hank', 'hank@gmail.com', 'hank123'),
    ('Ivy', 'ivy@gmail.com', 'ivy123'),
    ('Jack', 'jack@gmail.com', 'jack123');
