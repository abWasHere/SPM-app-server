const playersList = [
  {
    email: "audrey.belson@mail.com",
    password: "1234",
    firstName: "Audrey",
    lastName: "Belson",
    location: {
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
    location: {
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
    location: {
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
    location: {
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
  {
    picture: "/images/humaaans.png",
    email: "janedoe1@mail.com",
    password: "1234",
    firstName: "Jane",
    lastName: "Doe",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",
    email: "janedoe2@mail.com",
    password: "1234",
    firstName: "Janette",
    lastName: "Doe",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",

    email: "janedoe3@mail.com",
    password: "1234",
    firstName: "Janine",
    lastName: "Doe",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",

    email: "janedoe4@mail.com",
    password: "1234",
    firstName: "Hélène",
    lastName: "Doury",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",

    email: "janedoe5@mail.com",
    password: "1234",
    firstName: "Simone",
    lastName: "John",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    email: "janedoe6@mail.com",
    password: "1234",
    firstName: "Stéphanie",
    lastName: "Rouma",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",

    email: "janedoe7@mail.com",
    password: "1234",
    firstName: "Juliette",
    lastName: "Marin",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    email: "janedoe8@mail.com",
    password: "1234",
    firstName: "Cécile",
    lastName: "Yoly",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    email: "janedoe9@mail.com",
    password: "1234",
    firstName: "Karine",
    lastName: "Noben",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    email: "janedoe10@mail.com",
    password: "1234",
    firstName: "Pauline",
    lastName: "Voiron",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",
    email: "janedoe11@mail.com",
    password: "1234",
    firstName: "Coline",
    lastName: "Barin",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    picture: "/images/humaaans.png",
    email: "janedoe12@mail.com",
    password: "1234",
    firstName: "Marie",
    lastName: "Diaye",
    location: {
      type: "Point",
      coordinates: [2.5112884044647217, 48.81346893310547],
      formattedPlace: "Champigny-sur-Marne, Val-de-Marne, France",
    },
    practice: {
      sport: "Football",
      level: "expérimentée",
    },
    description: "Joueuse pro, je marque des buts non stop!",
    role: "Player",
  },
  {
    email: "tata@mail.com",
    password: "1234",
    firstName: "Tata",
    lastName: "Foo",
    location: {
      type: "Point",
      coordinates: [2.2071267, 48.8924273],
      formattedPlace: "Nanterre, France",
    },
    practice: {
      sport: "Volley-ball",
      level: "intermédiaire",
    },
    description: "Recrutez-moi !!!!!",
    role: "Player",
  },
];

module.exports = playersList;
