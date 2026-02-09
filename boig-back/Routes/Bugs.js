const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("add the bugs");
});

router.post("/", async (req, res) => {
  const { userId, description } = req.body;
  console.log(userId, description);
  res.send("new bug added");
});

module.exports = router;
