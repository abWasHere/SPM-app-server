const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const clubModel = require("../models/Club.js");
const playerModel = require("../models/Player.js");
const fileUploader = require("../config/cloudinary");

const salt = 10;

//  --------------------------------------
// ROUTES PREFIX IS    /api/auth
//  --------------------------------------

// SIGN IN ALL

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  clubModel
    .findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        playerModel
          .findOne({ email })
          .populate({
            path: "practice",
            populate: {
              path: "sport",
              model: "Sport",
            },
          })
          .then((userDocument) => {
            if (!userDocument) {
              return res.status(400).json({ message: "Invalid credentials" });
            }
            const isValidPassword = bcrypt.compareSync(
              password,
              userDocument.password
            );
            if (!isValidPassword) {
              return res.status(400).json({ message: "Invalid credentials" });
            }
            const userObj = userDocument.toObject();
            delete userObj.password;
            req.session.currentUser = userObj;
            res.status(200).json(userObj);
          });
      }
      if (userDocument) {
        const isValidPassword = bcrypt.compareSync(
          password,
          userDocument.password
        );
        if (!isValidPassword) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
        const userObj = userDocument.toObject();
        delete userObj.password;
        req.session.currentUser = userObj;
        res.status(200).json(userObj);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// CLUB SIGN UP
router.post("/signup/club", fileUploader.single("image"), (req, res, next) => {
  const newClub = { ...req.body };

  if (req.file) {
    newClub.image = req.file.path;
  }

  playerModel.findOne({ email: newClub.email }).then((playerDocument) => {
    if (playerDocument) {
      return res.status(400).json({
        existingMail:
          "Cet email existe déjà dans notre base : merci de vous connecter ou d'utiliser une autre adresse mail pour créer votre compte.",
      });
    }

    try {
      clubModel
        .findOne({ email: newClub.email })
        .then((clubDocument) => {
          if (clubDocument) {
            return res.status(400).json({
              existingMail:
                "Cet email existe déjà dans notre base : merci de vous connecter ou d'utiliser une autre adresse mail pour créer votre compte.",
            });
          }

          try {
            const hashedPassword = bcrypt.hashSync(newClub.password, salt);
            newClub.password = hashedPassword;

            clubModel.create(newClub).then((newClubDocument) => {
              const clubObj = newClubDocument.toObject();
              delete clubObj.password;
              req.session.currentUser = clubObj;
              res.status(201).json(clubObj);
            });
          } catch (err) {
            res.status(500).json(err);
          }
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

// PLAYER SIGN UP
router.post(
  "/signup/player",
  fileUploader.single("picture"),
  (req, res, next) => {
    const newPlayer = { ...req.body };

    if (req.file) newPlayer.picture = req.file.path;

    clubModel
      .findOne({ email: newPlayer.email })
      .then((clubDocument) => {
        if (clubDocument) {
          return res.status(400).json({
            existingMail:
              "Un compte existe déjà avec cet email : merci de te connecter ou d'utiliser une autre adresse mail pour t'inscrire.",
          });
        }

        try {
          playerModel
            .findOne({ email: newPlayer.email })
            .then((playerDocument) => {
              if (playerDocument) {
                return res.status(400).json({
                  existingMail:
                    "Un compte existe déjà avec cet email : merci de te connecter ou d'utiliser une autre adresse mail pour t'inscrire.",
                });
              }

              try {
                const hashedPassword = bcrypt.hashSync(
                  newPlayer.password,
                  salt
                );
                newPlayer.password = hashedPassword;
                newPlayer.practice[0].sport = newPlayer.sport;
                newPlayer.practice[0].level = newPlayer.level;

                console.log("==========newPlayer", newPlayer);
                playerModel.create(newPlayer).then((newPlayerDocument) => {
                  const playerObj = newPlayerDocument.toObject();
                  delete playerObj.password;
                  req.session.currentUser = playerObj;
                  res.status(201).json(playerObj);
                });
              } catch (err) {
                console.log(err);
                res.status(500).json(err);
              }
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

// USER IS LOGGED IN

router.get("/isLoggedIn", (req, res, next) => {
  if (req.session.currentUser) {
    res.status(200).json(req.session.currentUser);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

// USER LOG OUT

router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) res.status(500).json(error);
    else res.status(200).json({ message: "Succesfully disconnected." });
  });
});

module.exports = router;
