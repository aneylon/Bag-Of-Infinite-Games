const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4200;
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const auth = require("./Routes/Auth");

app.use("/auth", auth);

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
