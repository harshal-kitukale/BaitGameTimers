const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
require("dotenv").config();
const { AndarBaharTimerFunction } = require("./Routes/AndarBaharTimer");
const { DragonTigerTimerFunction } = require("./Routes/DragonTigerTimer");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});

// timer and main card function
setTimeout(() => {
  AndarBaharTimerFunction();
}, 500);

setTimeout(() => {
  // DragonTigerTimerFunction();
}, 1000);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
