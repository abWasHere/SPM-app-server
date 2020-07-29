const express = require("express");
const router = express.Router();
const playerModel = require("./../models/Player.js");

router.get("/", function (req, res, next) {
	playerModel
		.find()
		.then((dbRes) => {
			res.status(200).json(dbRes);
		})
		.catch(next);
});

module.exports = router;
