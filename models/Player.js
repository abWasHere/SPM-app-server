const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  picture: { type: String, default: "../public/images/open-figures.png" },
  city: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number] },
    formattedPlace: String,
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
      player: {
        type: Schema.Types.ObjectId,
        ref: "Player",
      },
    },
  ],
  favoriteClubs: [
    {
      club: {
        type: Schema.Types.ObjectId,
        ref: "Club",
      },
    },
  ],
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
