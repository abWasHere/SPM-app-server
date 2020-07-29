const express = require("express");
const router = express.Router();
const sportModel = require('./../models/Sport.js')

router.get("/", function (req, res, next) {
 sportModel
		.find()
		.then((dbResSport) => {
			res.status(200).json(dbResSport);
		})
		.catch(next);

});

module.exports = router;
