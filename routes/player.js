const express = require("express");
const router = express.Router();
const playerModel = require("./../models/Player.js");
const uploader = require("./../config/cloudinary");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");

//  --------------------------------------
// ROUTES PREFIX IS    /api/player
//  --------------------------------------

// GET ALL PLAYERS

router.get("/", (req, res) => {
  playerModel
    .find()
    .select("-password")
    .populate({
      path: "practice",
      populate: {
        path: "sport",
        model: "Sport",
      },
    })
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
    .populate({
      path: "practice",
      populate: {
        path: "sport",
        model: "Sport",
      },
    })
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PLAYER EDIT ACCOUNT

router.patch(
	"/:id",
	protectPrivateRoute,
	uploader.single("picture"),
	(req, res) => {
		const updatedInfos = req.body;

		if (req.file) updatedInfos.picture = req.file.path;

		playerModel
			.findByIdAndUpdate(req.params.id, updatedInfos, { new: true })
			.select("-password")
			.then((user) => {
				req.session.currentUser = updatedUser;
				res.status(200).json(user);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}
);

// PLAYER DELETE ACCOUNT

router.delete("/:id", protectPrivateRoute, (req, res) => {
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
