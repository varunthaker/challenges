const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const PORT = 3000 || process.env.PORT;

const nameObject = [
  { id: 1, name: "varun" },
  { id: 2, name: "priyanka" },
];

app.get("/name", (req, res) => {
  res.send(nameObject);
});

app.post("./name", (req, res) => {});

app.get("/numbers", (req, res) => {
  res.json([2, 3, 4]);
});

app.post("/numbers", (req, res) => {
  res.send(req.body);
});

app.get("/posts/:postID/names/:name", (req, res) => {
  res.json(req.params);
});

app.get("/:name", (req, res) => {
  console.log("This is get request");
  res.send(`Your name is ${req.params.name}`);
});

app.listen(PORT, () => {
  console.log(`The server is running ${PORT}`);
});
