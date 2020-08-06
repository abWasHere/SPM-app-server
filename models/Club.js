const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  clubName: { type: String, required: true },
  image: { type: String, default: "/images/happy-bunch.png" },
  address: { type: String },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number] },
    formattedAddress: String,
  },
  phoneNumber: String,
  website: String,
  videoURL: String,
  year: String,
  subscriptionFee: String,
  description: String,
  role: { type: String, enum: ["Club"], default: "Club" },
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

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
