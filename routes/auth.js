const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const clubModel = require("../models/Club.js");
const playerModel = require("../models/Player.js");

const salt = 10;

//  --------------------------------------
// ROUTES PREFIX IS    /api/auth
//  --------------------------------------

// CLUB SIGN IN
router.post("/signin/club", (req, res, next) => {
	const { email, password } = req.body;
	clubModel.findOne({ email }).then((userDocument) => {
		if (!userDocument) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		const isValidPassword = bcrypt.compareSync(password, userDocument.password);
		if (!isValidPassword) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		const userObj = userDocument.toObject();
		delete userObj.password;
		req.session.currentUser = userObj;
		res.status(200).json(userObj);
	});
});

// PLAYER SIGN IN
router.post("/signin/player", (req, res, next) => {
	const { email, password } = req.body;
	playerModel.findOne({ email }).then((userDocument) => {
		if (!userDocument) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		const isValidPassword = bcrypt.compareSync(password, userDocument.password);
		if (!isValidPassword) {
			return res.status(400).json({ message: "Invalid credentials" });
		}
		const userObj = userDocument.toObject();
		delete userObj.password;
		req.session.currentUser = userObj;
		res.status(200).json(userObj);
	});
});

// CLUB SIGN UP
router.post("/signup/club", (req, res, next) => {
	const {
		role,
		email,
		clubName,
		address,
		phoneNumber,
		website,
		foundedYear,
		description,
		password,
	} = req.body;

	clubModel.findOne({ email }).then((clubDocument) => {
		if (clubDocument) {
			return res.status(400).json({ message: "Email already taken" });
		}

		const hashedPassword = bcrypt.hashSync(password, salt);
		const newClub = {
			role,
			email,
			clubName,
			address,
			phoneNumber,
			website,
			foundedYear,
			description,
			password: hashedPassword,
		};

		clubModel.create(newClub).then((newClubDocument) => {
			const clubObj = newClubDocument.toObject();
			delete clubObj.password;
			req.session.currentUser = clubObj;
			res.status(201).json(clubObj);
		});
	});
});

// PLAYER SIGN UP
router.post("/signup/player", (req, res, next) => {
	const {
		role,
		email,
		firstName,
		lastName,
		city,
		practice,
		description,
		password,
	} = req.body;

	playerModel
		.findOne({ email })
		.populate("practice.sport")
		.then((playerDocument) => {
			if (playerDocument) {
				return res.status(400).json({ message: "Email already taken" });
			}

			const hashedPassword = bcrypt.hashSync(password, salt);
			const newPlayer = {
				role,
				email,
				firstName,
				lastName,
				city,
				practice,
				description,
				password: hashedPassword,
			};

			playerModel.create(newPlayer).then((newPlayerDocument) => {
				const playerObj = newPlayerDocument.toObject();
				delete playerObj.password;
				req.session.currentUser = playerObj;
				res.status(201).json(playerObj);
			});
		});
});

router.get("/isLoggedIn", (req, res, next) => {
	if (req.session.currentUser) {
		res.status(200).json(req.session.currentUser);
	} else {
		res.status(401).json({ message: "Unauthorized" });
	}
});

router.get("/logout", (req, res, next) => {
	req.session.destroy(function (error) {
		if (error) res.status(500).json(error);
		else res.status(200).json({ message: "Succesfully disconnected." });
	});
});

module.exports = router;
