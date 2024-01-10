const mongoose = require("mongoose");

const gameTimerSchema = new mongoose.Schema({
  value: Number,
  _id: String,
});

const AndarBaharGameTimer = mongoose.model("AndarBaharGameTimer", gameTimerSchema);
const DragonTigerGameTimer = mongoose.model("DragonTigerGameTimer", gameTimerSchema);

module.exports = { DragonTigerGameTimer,AndarBaharGameTimer };
