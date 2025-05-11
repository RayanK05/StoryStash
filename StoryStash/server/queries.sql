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

--Join Command--
SELECT 
    users.email,
    media.media_id,
    media.title AS media_title,
    media.media_type,
    notes.title AS note_title,
    notes.note
FROM users
JOIN media ON users.email = media.user_email
JOIN notes ON media.media_id = notes.media_id;
