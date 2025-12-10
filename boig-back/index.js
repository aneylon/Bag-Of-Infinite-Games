require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.port;
const mongo_uri = process.env.mongo_uri;

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const auth = require("./Routes/Auth");
const { default: mongoose } = require("mongoose");

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

mongoose
  .connect(mongo_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => console.error(error));
