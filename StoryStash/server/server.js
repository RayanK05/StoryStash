import express from 'express';

const app = express();

app.get ("/api", (req, res) => {
  res.json({"users": ["userOne", "userTwo", "userThree"]});
})

app.listen(3100, () => {
  console.log("Listening on port 3100.");
})