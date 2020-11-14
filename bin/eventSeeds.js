const eventsList = [
	{
		title: "Séance d'essai",
		date: "2021-08-23",
		time: "18h00",
		image: "./../images/happy-bunch.png",
		location: {
			type: "Point",
			coordinates: [2.347191915360213, 48.83252762569717],
			formattedAddress: "19 Rue Corvisart, 75013 Paris, France",
		},
		description:
			"VENEZ NOMBREUSES ! 🤩 Recrutement ouvert pour nos deux équipes compétitives ainsi que la section loisirs, pour la saison 2020-2021! 💪",
		sport: "Futsal",
		club: "Paris Féminin Football Club",
	},
	{
		title: "Tournoi Hat féminin",
		date: "2021-09-05",
		time: "9h30",
		location: {
			type: "Point",
			coordinates: [2.4514482711642813, 48.88727983601035],
			formattedAddress: "2 Rue Jules Auffret, 93130 Noisy-le-Sec, France",
		},
		description:
			"Quelque soit votre niveau, venez jouez à l'ultimate, seule ou avec vos copines. Les équipes du tournoi seront tirées au sort pour permettre un tournoi équilibré !",
		sport: "Ultimate",
		club: "Iznogood",
	},
	{
		title: "Session de recrutement",
		date: "2021-06-29",
		time: "18h30",
		location: {
			type: "Point",
			coordinates: [2.3683899999796267, 48.877413359864164],
			formattedAddress: "17 Rue Boy-Żeleński, 75010 Paris, France",
		},
		description:
			"Venez rencontrer les joueuses, tâter du ballon et faire votre place dans l'équipe pour la rentrée prochaine !",
		sport: "Basket-ball",
		club: "Viking Club Paris",
	},
];

module.exports = eventsList;
