const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
/*
 * This is a simple messaging app
 * All messages will be stored in device memory
 */
const messageStorage = [];
let newMsgId = 0;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/message", (req, res) => {
  res.json(messageStorage);
});

app.post("/message", function (req, res) {
  const newMessageObj = { id: newMsgId, ...req.body };
  newMsgId++;
  messageStorage.push(newMessageObj);
  res.send("Message send successfully");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
