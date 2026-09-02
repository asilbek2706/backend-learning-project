const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
  // res.status(400).json({ message: "Hello World!" });
});

app.post("/post", (req, res) => {
  const { firstName, lastName, age } = req.body;
  const message = `Hello ${firstName} ${lastName}, you are ${age} years old!`;
  res.send(message);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete request received for ID: ${id}`);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({ message: `Update request received for ID: ${id}`, body });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on - http://localhost:${PORT}`);
});
