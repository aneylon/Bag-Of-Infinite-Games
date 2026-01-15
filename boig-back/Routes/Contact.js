const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("all the contacts");
});

router.post("/", (req, res) => {
  const { userId, content } = req.body;
  console.log({ userId, content });
  res.send("added new contact info");
});

module.exports = router;
