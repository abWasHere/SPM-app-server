const express = require("express");
const router = express.Router();
const clubModel = require("./../models/Club.js");

//  --------------------------------------
// ROUTES PREFIX IS    /api/club
//  --------------------------------------

// GET ALL THE CLUBS 
router.get("/", function (req, res, next) {
	clubModel
		.find()
		.then((dbResClub) => {
			res.status(200).json(dbResClub);
		})
		.catch(next);
});

// WARNING !!! DANS L'EDIT : METTRE A JOUR req.session.currentUser = updatedClub (retour de la db) SANS LE PASSWORD GRACE A LA METHODE .select( - password)






module.exports = router;
