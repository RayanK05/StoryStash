--Create Users Table--
CREATE TABLE users (
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(100) NOT NULL
);


--Create Media Table--
CREATE TABLE media (
    media_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    media_type VARCHAR(100),
    user_email VARCHAR(100) REFERENCES users(email)
);

--Create Notes Table--
CREATE TABLE notes (
    title VARCHAR(100),
    note TEXT,
    media_id INTEGER REFERENCES media(media_id)
);