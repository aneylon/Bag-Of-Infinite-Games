const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth!!!");
});

router.post("/login", (req, res) => {
  const { password, username } = req.body;
  console.log({ password, username });
  res.send(`login ${password} ${username}`);
});

router.post("/signup", (req, res) => {
  const { password, username } = req.body;
  res.send(`signup ${password} ${username}`);
});

module.exports = router;
