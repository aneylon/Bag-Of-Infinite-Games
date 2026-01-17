const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("add the bugs");
});

router.post("/", (req, res) => {
  const { userId, content } = req.body;
  console.log({ userId, content });
  res.send("new bug added");
});

module.exports = router;
