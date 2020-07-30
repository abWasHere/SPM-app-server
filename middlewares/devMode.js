module.exports = function devMode(req, res, next) {
  req.session.currentUser = {
    _id: "5ec3aaa1dda5ba14c2c72fe8", // change the user id here to fit your needs
    firstName: "demo",
    lastName: "IRONHACKEUSE",
    birthDate: "17-08-2000",
    picture: "https://cdn.onlinewebfonts.com/img_258083.png",
    email: "admin@spm.com",
  };
  next();
};
