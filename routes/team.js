const express = require("express");
const router = express.Router();
const teamModel = require("./../models/Player.js");

router.get("/", function (req, res, next) {
	teamModel
		.find()
		.then((dbResTeam) => {
			res.status(200).json(dbResTeam);
		})
		.catch(next);
});

module.exports = router;
