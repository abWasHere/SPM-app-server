const express = require("express");
const router = express.Router();
const clubModel = require("./../models/Club.js");
const uploader = require("./../config/cloudinary");

//  --------------------------------------
// ROUTES PREFIX IS    /api/club
//  --------------------------------------

// CLUB GET INFOS

router.get("/:id", (req, res, next) => {
	clubModel
		.findById(req.params.id)
		.select(-password)
		.populate("Player Club")
		.then((dbRes) => {
			res.status(200).json(dbRes);
		})
		.catch(next);
});

// CLUB EDIT ACCOUNT

router.patch("/edit/:id", uploader.single("image"), (req, res, next) => {
	const updatedInfos = req.body;

	if (req.file) updatedInfos.image = req.file.path;

	clubModel
		.findByIdAndUpdate(req.params.id, updatedInfos, { new: true })
		.select(-password)
		.then((updatedUser) => {
			res.status(200).json(updatedUser);
		})
		.catch(next);
});

// CLUB DELETE ACCOUNT
// TODO: display confirmation pop up on the front end before getting to this route

router.post("/delete/:id", (req, res, next) => {
	clubModel
		.findByIdAndRemove(req.params.id)
		.then(() => {
			res.sendStatus(204);
		})
		.catch((err) => {
			res.sendStatus(500);
		});
});

module.exports = router;
