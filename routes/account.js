const express = require("express");
const router = express.Router();
const clubModel = require("./../models/Club.js");
const playerModel = require("./../models/Player.js");
const teamModel = require("./../models/Team.js");

//  --------------------------------------
// ROUTES PREFIX IS    /api/account
//  --------------------------------------

// GET ACCOUNT

router.get("/", (req, res, next) => {
	const user = req.session.currentUser;

	if (user.role === "Club") {
		clubModel
			.findById(user._id)
			.select(-password)
			.populate("Player Club")
			.then((createdUser) => {
				res.status(200).json(createdUser);
			})
			.catch(next);
	} else {
		playerModel
			.findById(user._id)
			.select(-password)
			.populate("Player Club")
			.then((createdUser) => {
				res.status(200).json(createdUser);
			})
			.catch(next);
	}

	Promise.all([
		eventModel.find().populate("Sport Club Player"),
		teamModel.find().populate("Sport Club Player"),
	])
		.then((dbRes) => {
			res.status(200).json(dbRes[0]);
			res.status(200).json(dbRes[1]);
		})

		.catch(next);
});

// EDIT ACCOUNT

router.patch("/edit/:id", (req, res, next) => {
	const user = req.session.currentUser;
	if (user.role === "Club") {
		clubModel
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.select(-password)
			.then((updatedUser) => {
				res.status(200).json(updatedUser);
			})
			.catch(next);
	} else {
		playerModel
			.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.select(-password)
			.then((updatedUser) => {
				res.status(200).json(updatedUser);
			})
			.catch(next);
	}
});

// DELETE ACCOUNT
// TODO: display confirmation pop up on the front end before getting to this route

router.post("/delete/:id", (req, res, next) => {
	const user = req.session.currentUser;
	if (user.role === "Club") {
		clubModel
			.findByIdAndRemove(req.params.id)
			.then(() => {
				res.sendStatus(204);
			})
			.catch((err) => {
				res.sendStatus(500);
			});
	} else {
		playerModel
			.findByIdAndRemove(req.params.id)
			.then(() => {
				res.sendStatus(204);
			})
			.catch((err) => {
				res.sendStatus(500);
			});
	}
});

module.exports = router;
