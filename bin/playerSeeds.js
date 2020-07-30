const playersList = [
  {
    email: "audrey.belson@mail.com",
    password: "1234",
    firstName: "Audrey",
    lastName: "Belson",
    city: {
      type: "Point",
      coordinates: [2.3612091604104535, 48.79387197078859],
      formattedPlace: "Villejuif, Val-de-Marne, France",
    },
    practice: {
      sport: "Boxe",
      level: "expérimentée",
    },
    description:
      "Je me suis mise à la boxe il n'y a pas si longtemps mais j'adore ça !",
    role: "Player",
  },
  {
    email: "aude.richon@mail.com",
    password: "1234",
    firstName: "Aude",
    lastName: "Richon",
    city: {
      type: "Point",
      coordinates: [2.352273820640562, 48.85664221136983],
      formattedPlace: "Paris, France",
    },
    practice: {
      sport: "Ultimate",
      level: "expérimentée",
    },
    description:
      "Ca fait plus de 10 ans que je joue à l'ultimate, j'adore l'ambiance et la compétition !",
    role: "Player",
  },
  {
    email: "claire.roche@mail.com",
    password: "1234",
    firstName: "Claire",
    lastName: "Roche",
    city: {
      type: "Point",
      coordinates: [2.439252372627493, 48.847664962616534],
      formattedPlace: "Vincennes, Val-de-Marne, France",
    },
    practice: {
      sport: "Basket-ball",
      level: "intermédiaire",
    },
    description:
      "Ca fait quelques années que je joue au basket, plutôt en loisirs.",
    role: "Player",
  },
  {
    email: "melanie.ambar@mail.com",
    password: "1234",
    firstName: "Mélanie",
    lastName: "Ambar",
    city: {
      type: "Point",
      coordinates: [2.2693524386621675, 48.82299341586125],
      formattedPlace: "Issy-les-Moulineaux, Hauts-de-Seine, France",
    },
    practice: {
      sport: "Football",
      level: "débutante",
    },
    description:
      "Je cherche un club de football féminin pour apprendre à jouer.",
    role: "Player",
  },
];

module.exports = playersList;
