import express from 'express';
import pg from 'pg';

const app = express();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "media_notes",
  password: "Moh@med17",
  port: 5432,
});
db.connect();


let user = "Mohamed";


app.get ("/api", async (req, res) => {
  let result = await db.query(
    "SELECT users.email, media.media_id, media.title AS media_title, media.media_type, notes.title AS note_title, notes.note FROM users JOIN media ON users.email = media.user_email JOIN notes ON media.media_id = notes.media_id WHERE users.email = $1", [user]);
  let items = [];
  result.rows.forEach((item) => items.push({media: item.media_title, type: item.media_type, title: item.note_title, note : item.note}));
  
  console.log(items); // Check what's being sent
res.json({ postData: items });
})

app.listen(3100, () => {
  console.log("Listening on port 3100.");
})