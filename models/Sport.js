const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportSchema = new Schema({
  sportName: String,
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport;
