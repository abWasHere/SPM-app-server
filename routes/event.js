const express = require("express");
const router = express.Router();
const eventModel = require("./../models/Event.js");
const fileUploader = require("./../config/cloudinary");

//  --------------------------------------
// ROUTES PREFIX IS    /api/event
//  --------------------------------------

router.get("/", function (req, res) {
  eventModel
    .find()
    .populate("Sport Club")
    .then((dbResEvent) => {
      res.status(200).json(dbResEvent);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// router.get("/:query", function (req, res, next) {
// 	const query = req.params.query;
// 	eventModel
// 	  .find(query)
// 	  .then((dbResEvent) => {
// 		res.status(200).json(dbResEvent);
// 	  })
// 	  .catch((err) => {
// 		res.status(500).json(err);
// 	  });
//   });

router.get("/:id", (req, res) => {
  eventModel
    .findById(req.params.id)
    .populate("Sport Club")
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", fileUploader.single("image"), (req, res) => {
  const newEvent = { ...req.body, owner: req.session.currentUser._id };
  //console.log(newEvent);
  if (req.file) {
    console.log(req.file);
    newEvent.image = req.file.path;
  }
  eventModel
    .create(newEvent)
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.patch("/:id", fileUploader.single("image"), (req, res) => {
  const updatedEvent = { ...req.body };
  if (req.file) {
    console.log(req.file);
    updatedEvent.image = req.file.path;
  }
  eventModel
    .findByIdAndUpdate(req.params.id, updatedEvent, { new: true })
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  eventModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
