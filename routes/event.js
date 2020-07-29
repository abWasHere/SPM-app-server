const express = require("express");
const router = express.Router();
const eventModel = require("./../models/Sport.js");

router.get("/", function (req, res, next) {
	eventModel
		.find()
		.then((dbResEvent) => {
			res.status(200).json(dbResEvent);
		})
		.catch(next);
});

module.exports = router;
