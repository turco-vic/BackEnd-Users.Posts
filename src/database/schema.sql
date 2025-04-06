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
    ('Enzo', 'enzo@gmail.com', 'enzoo'),
    ('Alves', 'alves@gmail.com', 'alvess'),
    ('Turco', 'turco@gmail.com', 'turcoo');
   
INSERT INTO posts (title, content, user_id) VALUES 
    ('Post 1', 'Content of post 1', 1),
    ('Post 2', 'Content of post 2', 2),
    ('Post 3', 'Content of post 3', 3);