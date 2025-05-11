import express from 'express';

const app = express();

app.get ("/api", (req, res) => {
  res.json({message: "Hello from server!"})})

app.listen(3100, () => {
  console.log("Listening on port 3100.");
})