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
    ('Jack', 'jack@gmail.com', 'jack123'),
    ('Karen', 'karen@gmail.com', 'karen123'),
    ('Leo', 'leo@gmail.com', 'leo123'),
    ('Mia', 'mia@gmail.com', 'mia123'),
    ('Nina', 'nina@gmail.com', 'nina123'),
    ('Oscar', 'oscar@gmail.com', 'oscar123'),
    ('Paul', 'paul@gmail.com', 'paul123'),
    ('Quinn', 'quinn@gmail.com', 'quinn123'),
    ('Rachel', 'rachel@gmail.com', 'rachel123'),
    ('Steve', 'steve@gmail.com', 'steve123'),
    ('Tina', 'tina@gmail.com', 'tina123'),
    ('Uma', 'uma@gmail.com', 'uma123'),
    ('Victor', 'victor@gmail.com', 'victor123'),
    ('Wendy', 'wendy@gmail.com', 'wendy123'),
    ('Xander', 'xander@gmail.com', 'xander123'),
    ('Yara', 'yara@gmail.com', 'yara123'),
    ('Zane', 'zane@gmail.com', 'zane123'),
    ('Bella', 'bella@gmail.com', 'bella123'),
    ('Carter', 'carter@gmail.com', 'carter123'),
    ('Derek', 'derek@gmail.com', 'derek123'),
    ('Ella', 'ella@gmail.com', 'ella123'),
    ('Finn', 'finn@gmail.com', 'finn123'),
    ('Gina', 'gina@gmail.com', 'gina123'),
    ('Henry', 'henry@gmail.com', 'henry123'),
    ('Isla', 'isla@gmail.com', 'isla123'),
    ('Jake', 'jake@gmail.com', 'jake123'),
    ('Liam', 'liam@gmail.com', 'liam123'),
    ('Molly', 'molly@gmail.com', 'molly123'),
    ('Noah', 'noah@gmail.com', 'noah123'),
    ('Olivia', 'olivia@gmail.com', 'olivia123'),
    ('Piper', 'piper@gmail.com', 'piper123'),
    ('Quincy', 'quincy@gmail.com', 'quincy123'),
    ('Ruby', 'ruby@gmail.com', 'ruby123'),
    ('Sam', 'sam@gmail.com', 'sam123'),
    ('Toby', 'toby@gmail.com', 'toby123'),
    ('Ursula', 'ursula@gmail.com', 'ursula123'),
    ('Vera', 'vera@gmail.com', 'vera123'),
    ('Will', 'will@gmail.com', 'will123'),
    ('Xena', 'xena@gmail.com', 'xena123'),
    ('Yvonne', 'yvonne@gmail.com', 'yvonne123'),
    ('Zack', 'zack@gmail.com', 'zack123');
