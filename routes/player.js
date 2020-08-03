const express = require("express");
const router = express.Router();
const playerModel = require("./../models/Player.js");
const uploader = require("./../config/cloudinary");

//  --------------------------------------
// ROUTES PREFIX IS    /api/player
//  --------------------------------------

// GET ALL PLAYERS

router.get("/", (req, res) => {
  playerModel
    .find()
    .select("-password")
    .populate({ path: "practice", populate: { path: "sport" } })
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PLAYER GET INFOS

router.get("/:id", (req, res) => {
  playerModel
    .findById(req.params.id)
    .select("-password")
    .populate("sport")
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PLAYER EDIT ACCOUNT

router.patch("/:id", uploader.single("picture"), (req, res) => {
  const updatedInfos = req.body;

  if (req.file) updatedInfos.picture = req.file.path;

  playerModel
    .findByIdAndUpdate(req.params.id, updatedInfos, { new: true })
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PLAYER DELETE ACCOUNT
// TODO: display confirmation pop up on the front end before getting to this route

router.delete("/:id", (req, res) => {
  playerModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
