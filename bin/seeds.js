require("dotenv").config();
require("./../config/dbConnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// all models
const sportModel = require("../models/Sport");
const playerModel = require("../models/Player");
const clubModel = require("../models/Club");
const eventModel = require("../models/Event");
const teamModel = require("../models/Team");

// all seeds
const sportsList = require("./sportSeeds");
const playersList = require("./playerSeeds");
const clubsList = require("./clubSeeds");
const teamsList = require("./teamSeeds");
const eventsList = require("./eventSeeds");

// seeding

async function sendAllSeeds() {
  try {
    mongoose.connection.dropDatabase();

    const allSports = await sportModel.create(sportsList);
    // console.log(allSports);

    clubsList.forEach((club) => {
      const salt = bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(club.password, salt);
      // generates a unique random hashed password
      club.password = hashed; // new club is ready for db
    });

    const cleanClubsList = await clubModel.create(clubsList);
    // console.log("CLEAN CLUBS LIST ========>", cleanClubsList);

    playersList.forEach((player) => {
      let playerPractice = [player.practice]; // represents an array of { sport + level } = sportObjects

      playerPractice.forEach((practiceObjects) => {
        let filteredArray = allSports.filter((sport) => {
          return sport.sportName === practiceObjects.sport;
        });
        let id = filteredArray[0]._id;
        practiceObjects.sport = id;
      });
      const salt = bcrypt.genSaltSync(10);
      const hashed = bcrypt.hashSync(player.password, salt);
      // generates a unique random hashed password
      player.password = hashed; // new user is ready for db
    });

    const cleanPlayersList = await playerModel.create(playersList);
    // console.log("CLEAN PLAYERS LIST ========>", cleanPlayersList);

    eventsList.forEach((event) => {
      // find the sport
      let filteredArray1 = allSports.filter((sport) => {
        return sport.sportName === event.sport;
      });
      let id1 = filteredArray1[0]._id;
      event.sport = id1;

      // find the club
      let filteredArray2 = cleanClubsList.filter((club) => {
        return club.clubName === event.club;
      });
      let id2 = filteredArray2[0]._id;
      event.club = id2;
    });

    const cleanEventsList = await eventModel.create(eventsList);
    // console.log("CLEAN EVENTS LIST ========>", cleanEventsList);

    teamsList.forEach((team) => {
      // find the sport
      let filteredArray1 = allSports.filter((sport) => {
        return sport.sportName === team.sport;
      });
      let id1 = filteredArray1[0]._id;
      team.sport = id1;

      // find the club
      let filteredArray2 = cleanClubsList.filter((club) => {
        return club.clubName === team.club;
      });
      let id2 = filteredArray2[0]._id;
      team.club = id2;

      // find the registered players
      if (team.registeredPlayers.length > 0) {
        let filteredArray3 = cleanPlayersList.filter((player) => {
          return player.firstName === team.registeredPlayers[0].player;
        });
        let id3 = filteredArray3[0]._id;
        team.registeredPlayers[0].player = id3;
      }
    });

    const cleanTeamsList = await teamModel.create(teamsList);
    console.log("CLEAN TEAMS LIST ========>", cleanTeamsList);
  } catch (error) {
    console.log(error);
  }
}

sendAllSeeds();
