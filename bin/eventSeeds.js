const eventsList = [
  {
    title: "Séance d'essai",
    date: "23/08/2020",
    image:
      "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/s1080x2048/105901416_10158763684513083_4673726966580597882_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=zH4TIQFTnDcAX-KGXwU&_nc_ht=scontent-cdt1-1.xx&_nc_tp=7&oh=aa467734707624a2339e6af0699c04a6&oe=5F48F2AA",
    address: {
      type: "Point",
      coordinates: [2.347191915360213, 48.83252762569717],
      formattedPlace: "19 Rue Corvisart, 75013 Paris, France",
    },
    description:
      "VENEZ NOMBREUSES ! 🤩 Recrutement ouvert pour nos deux équipes compétitives ainsi que la section loisirs, pour la saison 2020-2021! 💪",
    sport: "Futsal",
    owner: "Paris Féminin Football Club",
  },
  {
    title: "Tournoi Hat féminin",
    date: "05/09/2020",
    address: {
      type: "Point",
      coordinates: [2.4514482711642813, 48.88727983601035],
      formattedPlace: "2 Rue Jules Auffret, 93130 Noisy-le-Sec, France",
    },
    description:
      "Quelque soit votre niveau, venez jouez à l'ultimate, seule ou avec vos copines. Les équipes du tournoi seront tirées au sort pour permettre un tournoi équilibré !",
    sport: "Ultimate",
    owner: "Iznogood",
  },
];

module.exports = eventsList;
