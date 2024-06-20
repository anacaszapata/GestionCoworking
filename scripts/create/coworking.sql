CREATE TABLE room (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    number_workspaces INT NOT NULL
);

CREATE TABLE workspace (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    columns VARCHAR(10),
    rows VARCHAR(10),
    rooms_id INT,
    FOREIGN KEY (rooms_id) REFERENCES room(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE session (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
);

CREATE TABLE reservation (
    id SERIAL PRIMARY KEY,
    user_id INT,
    workspace_id INT,
    reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_id INT,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (workspace_id) REFERENCES workspace(id),
    FOREIGN KEY (session_id) REFERENCES session(id)
);


SELECT * FROM users

SELECT * FROM room

SELECT * FROM workspace

select * FROM session

SELECT * FROM reservation LIMIT 10