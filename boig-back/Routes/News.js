const express = require("express");

const router = express.Router();

const mockNews = [
  {
    id: 1,
    title: "news item one",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quaerat quos tempora deleniti eius unde praesentium odio, dolor voluptates? Voluptas ab iure, quae eius odio cum eveniet nemo harum mollitia!",
    author: "dude",
    date: "11/20/25",
  },
  {
    id: 2,
    title: "news item two",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident reprehenderit nam, consequatur aut delectus adipisci perspiciatis fugit. Veniam, laudantium vitae.",
    author: "bro",
    date: "11/20/25",
  },
  {
    id: "7319",
    title: "test",
    body: "test",
    author: "admin",
    date: "11/23/2025",
  },
];

router.get("/", (req, res) => {
  res.send(mockNews);
});

router.post("/", (req, res) => {
  const { userId, title, body, date } = req.body;
  console.log(userId, title, body, date);
  res.send(`add new news : ${userId} : ${title} : ${body} : ${date}`);
});

module.exports = router;
