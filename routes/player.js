const express = require("express");
const router = express.Router();
const playerModel = require("./../models/Player.js");
const uploader = require("./../config/cloudinary");

//  --------------------------------------
// ROUTES PREFIX IS    /api/player
//  --------------------------------------

// PLAYER GET INFOS

router.get("/:id", (req, res, next) => {
	playerModel
		.findById(req.params.id)
		.select(-password)
		.populate("Sport Club")
		.then((dbRes) => {
			res.status(200).json(dbRes);
		})
		.catch(next);
});

// PLAYER EDIT ACCOUNT

router.patch("/edit/:id", uploader.single("picture"), (req, res, next) => {
	const updatedInfos = req.body;

	if (req.file) updatedInfos.picture = req.file.path;

	playerModel
		.findByIdAndUpdate(req.params.id, updatedInfos, { new: true })
		.select(-password)
		.then((updatedUser) => {
			res.status(200).json(updatedUser);
		})
		.catch(next);
});

// PLAYER DELETE ACCOUNT
// TODO: display confirmation pop up on the front end before getting to this route

router.post("/delete/:id", (req, res, next) => {
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
