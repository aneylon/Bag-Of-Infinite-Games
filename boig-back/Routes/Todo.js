const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("all the todos");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send("git todo : " + id);
});

router.post("/", (req, res) => {
  const { userId, description, completed } = req.body;
  console.log({ userId, description, completed });
  res.send("added new contact info");
});

module.exports = router;
