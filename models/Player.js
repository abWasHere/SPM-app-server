const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  picture: { type: String, default: "/images/open-figures.png" },
  address: { type: String },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number] },
    formattedAddress: String,
  },
  practice: [
    {
      sport: {
        type: Schema.Types.ObjectId,
        ref: "Sport",
      },
      level: {
        type: String,
        enum: ["débutante", "intermédiaire", "expérimentée"],
      },
    },
  ],
  description: String,
  role: { type: String, enum: ["Player"], default: "Player" },
  favoritePlayers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  favoriteClubs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Club",
    },
  ],
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
