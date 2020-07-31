const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: { type: String, required: true },
  club: {
    type: Schema.Types.ObjectId,
    ref: "Club",
  },
  coachName: String,
  image: { type: String, default: "../public/images/squiggles.png" },
  address: { type: String },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number] },
    formattedAddress: String,
  },
  minAge: Number,
  maxAge: Number,
  year: String,
  description: String,
  sport: {
    type: Schema.Types.ObjectId,
    ref: "Sport",
  },
  registeredPlayers: [
    {
      player: {
        type: Schema.Types.ObjectId,
        ref: "Player",
      },
    },
  ],
  division: String,
  practice: {
    type: String,
    enum: ["compétition", "loisir"],
  },
  trainings: [
    {
      day: {
        type: String,
        enum: [
          "lundi",
          "mardi",
          "mercredi",
          "jeudi",
          "vendredi",
          "samedi",
          "dimanche",
        ],
      },
      time: String,
      duration: String,
    },
  ],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
