require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// Routes
const postRoute = require("./routes/post.route");

const app = express();

app.use(express.json());

// Routes
app.use("/api/post", postRoute);

// app.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(`Delete request received for ID: ${id}`);
// });

// app.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   res.json({ message: `Update request received for ID: ${id}`, body });
// });

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const bootstrap = async () => {
  try {
    await mongoose
      .connect(DB_URL)
      .then(() => console.log("Connected to the database"));
    app.listen(PORT, () => {
      console.log(`Listening on - http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("Error connecting to the database:", error);
  }
};

bootstrap();
