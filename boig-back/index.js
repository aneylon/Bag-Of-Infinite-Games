const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("BoIG GET");
});

app.post("/", (req, res) => {
  res.send("BoIG POST");
});

app.patch("/", (req, res) => {
  res.send("BoIG PATCH");
});

app.put("/", (req, res) => {
  res.send("BoIG PUT");
});

app.delete("/", (req, res) => {
  res.send("BoIG DELETE");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
