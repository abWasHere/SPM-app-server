const express = require("express");
const router = express.Router();
const sportModel = require("./../models/Sport.js");

//  --------------------------------------
// ROUTES PREFIX IS    /api/sport
//  --------------------------------------

// SPORT GET ALL

router.get("/", (req, res, next) => {
	sportModel
		.find()
		.then((dbRes) => {
			res.status(200).json(dbRes);
		})
		.catch(next);
});

module.exports = router;
