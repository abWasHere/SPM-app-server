const express = require("express");
const router = express.Router();
const sportModel = require("../models/Sport.js");

//  --------------------------------------
// ROUTES PREFIX IS    /api/sport
//  --------------------------------------

// SPORT GET ALL

router.get("/", (req, res, next) => {
  sportModel
    .find()
    .sort({ sportName: 1 })
    .then((dbRes) => {
      res.status(200).json(dbRes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
