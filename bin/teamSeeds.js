const teamsList = [
  {
    teamName: "Boxe 100% Féminine",
    club: "Académie de boxes de Villejuif",
    coachName: "Elsa Hemat et Quentin Pelegrin",
    image:
      "https://i0.wp.com/usvkickboxing.com/v2/wp-content/uploads/banner-256733.png?w=1253",
    address: {
      type: "Point",
      coordinates: [2.371699542296824, 48.78592072418809],
      formattedPlace: "Place Paul Eluard, 94800 Villejuif, France",
    },
    minAge: 15,
    sport: "Boxe",
    pratice: "loisir",
    trainings: [
      {
        day: "mercredi",
        time: "17h30",
        duration: "1h30",
      },
      {
        day: "samedi",
        time: "11h00",
        duration: "1h30",
      },
    ],
    registeredPlayers: [{ player: "Audrey" }],
  },
  {
    teamName: "YAKA",
    club: "Iznogood",
    coachName: "Aline Mondiot et Anne Le Borgne",
    image:
      "http://www.iznogood-ultimate.fr/wp-content/uploads/2017/11/FB_IMG_1499448360964-1.jpg",
    address: {
      type: "Point",
      coordinates: [2.4514482711642813, 48.88727983601035],
      formattedPlace: "2 Rue Jules Auffret, 93130 Noisy-le-Sec, France",
    },
    minAge: 16,
    year: "2005",
    description:
      "L’équipe YAKA a été fondée en 2005 grâce à quelques joueuses phares de l’ultimate français qui ont souhaité combler une lacune en France : créer une équipe exclusivement féminine qui s’entraîne régulièrement, partage les mêmes objectifs et évolue continuellement grâce à leur participation dans les tournois nationaux et internationaux. En un peu plus de 10 ans, la composition de l’équipe a beaucoup changé mais l’objectif reste le même : faire de l’ultimate féminin et performer en France et à l’étranger. YAKA participe tous les ans à au moins 2 tournois européens et est présente aux championnats de France outdoor, indoor et beach.  YAKA se veut compétitive mais n’en n’oublie pas néanmoins les jeunes et les débutantes : les entrainements sont ouverts à toutes les joueuses désireuses de pratiquer l’ultimate.",
    sport: "Ultimate",
    registeredPlayers: [{ player: "Aude" }],
    division: "National",
    practice: "compétition",
    trainings: [
      {
        day: "lundi",
        time: "20h00",
        duration: "2h00",
      },
      {
        day: "mercredi",
        time: "20h00",
        duration: "2h00",
      },
    ],
  },
  {
    teamName: "Seniors 1",
    club: "Paris Féminin Football Club",
    coachName: "Léa Travert",
    image:
      "http://parisfemininfc.fr/wp-content/uploads/2020/02/IMG_20200111_150646_785-570x432.jpg",
    address: {
      type: "Point",
      coordinates: [2.347191915360213, 48.83252762569717],
      formattedPlace: "19 Rue Corvisart, 75013 Paris, France",
    },
    minAge: 18,
    sport: "Futsal",
    division: "Régionale",
    practice: "compétition",
    registeredPlayers: [],
    trainings: [
      {
        day: "dimanche",
        time: "14h30",
        duration: "1h30",
      },
    ],
  },
  {
    teamName: "Seniors 2",
    club: "Paris Féminin Football Club",
    coachName: "Filipe Dos Santos",
    address: {
      type: "Point",
      coordinates: [2.347191915360213, 48.83252762569717],
      formattedPlace: "19 Rue Corvisart, 75013 Paris, France",
    },
    minAge: 18,
    sport: "Futsal",
    division: "Régionale",
    practice: "compétition",
    registeredPlayers: [],
    trainings: [
      {
        day: "dimanche",
        time: "14h30",
        duration: "1h30",
      },
    ],
  },
  {
    teamName: "Juniors",
    club: "Paris Féminin Football Club",
    image:
      "http://parisfemininfc.fr/wp-content/uploads/2020/02/IMG_20200111_150646_785-570x432.jpg",
    address: {
      type: "Point",
      coordinates: [2.347191915360213, 48.83252762569717],
      formattedPlace: "19 Rue Corvisart, 75013 Paris, France",
    },
    minAge: 6,
    minAge: 12,
    sport: "Futsal",
    practice: "loisir",
    registeredPlayers: [],
    trainings: [
      {
        day: "samedi",
        time: "9h15",
        duration: "1h00",
      },
    ],
  },
  {
    teamName: "Basketball Senior Féminin",
    club: "Viking Club Paris",
    image:
      "https://www.vikingclubparis.org/wp-content/uploads/2020/02/LOGO.png",
    address: {
      type: "Point",
      coordinates: [2.362267271138876, 48.86414000000147],
      formattedPlace: "5 Rue Neuve Saint-Pierre, 75004 Paris, France",
    },
    minAge: 16,
    sport: "Basket-ball",
    practice: "loisir",
    registeredPlayers: [],
    trainings: [
      {
        day: "lundi",
        time: "20h30",
        duration: "1h30",
      },
      {
        day: "jeudi",
        time: "20h00",
        duration: "2h00",
      },
    ],
  },
  {
    teamName: "Equipe Féminine Première",
    club: "Viking Club Paris",
    image:
      "https://www.vikingclubparis.org/wp-content/uploads/2020/02/LOGO.png",
    address: {
      type: "Point",
      coordinates: [2.382464728816899, 48.85586394090353],
      formattedPlace: "2 Rue Japy, 75011 Paris, France",
    },
    minAge: 18,
    sport: "Futsal",
    description:
      "Matchs les week-ends de 16h00 à 18h00 (hors vacances scolaires).",
    practice: "compétition",
    registeredPlayers: [],
    trainings: [
      {
        day: "lundi",
        time: "20h30",
        duration: "1h30",
      },
      {
        day: "jeudi",
        time: "20h00",
        duration: "2h00",
      },
    ],
  },
  {
    teamName: "Football à 11 féminin",
    club: "Viking Club Paris",
    image:
      "https://www.vikingclubparis.org/wp-content/uploads/2020/02/LOGO.png",
    address: {
      type: "Point",
      coordinates: [2.459072965088808, 48.81741375586395],
      formattedPlace: "12 Avenue Des Canadiens, 94410 Saint-Maurice, France",
    },
    minAge: 18,
    sport: "Football",
    practice: "loisir",
    registeredPlayers: [],
    trainings: [
      {
        day: "mardi",
        time: "20h00",
        duration: "2h00",
      },
      {
        day: "samedi",
        time: "14h00",
        duration: "2h00",
      },
    ],
  },
];

module.exports = teamsList;
