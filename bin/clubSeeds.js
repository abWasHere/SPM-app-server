const clubsList = [
	{
		email: "academiedesboxes.president00@gmail.com",
		password: "1234",
		clubName: "Académie de boxes de Villejuif",
		image:
			"http://usvkickboxing.com/v2/wp-content/uploads/2016/11/logo-Nov-YEUIR.png",
		location: {
			type: "Point",
			coordinates: [2.371699542296824, 48.78592072418809],
			formattedAddress: "Place Paul Eluard, 94800 Villejuif, France",
		},
		phoneNumber: "06 48 25 66 50",
		website: "http://usvkickboxing.com/v2/",
		videoURL: "https://vimeo.com/253711806",
		year: "1991",
		subscriptionFee:
			"ADULTES ET + DE 15 ANS : 240 €, COURS FEMININ UNIQUEMENT : 160 €, COURS FEMININ + COURS SEMAINES  : 300€",
		description:
			"Force, Courage et Détermination. Ouvert au début des années 90, le club de VILLEJUIF n’a cessé d’évoluer. Nous sommes membre de l’office Municipal des Sports et soutenu par la municipalité de notre ville, nous en profitons pour remercier tous ceux qui depuis des années sont derrière nous. Notre club est devenu une Académie des Boxes depuis plusieurs années. Nous enseignons différentes disciplines: Boxe Anglaise, Kick-Boxing, K1 (Kick-Boxing Japonnais) Muay Thai. Nos cours sont encadrés par différents entraineurs, tous diplômés d’Etat et anciens compétiteurs. Le tout sous la responsabilité de notre Président Florent Guilon secondé par les membres du bureau. Rendez-vous à toutes à la salle Marcel Cerdan de Villejuif !",
		role: "Club",
	},
	{
		email: "iznogood9300@yahoo.fr",
		password: "1234",
		clubName: "Iznogood",
		image:
			"http://www.iznogood-ultimate.fr/wp-content/uploads/2017/09/cropped-izno-club-ultimate-frisbee-nois%C3%A9en.png",
		location: {
			type: "Point",
			coordinates: [2.4514482711642813, 48.88727983601035],
			formattedAddress: "2 Rue Jules Auffret, 93130 Noisy-le-Sec, France",
		},
		website: "http://www.iznogood-ultimate.fr/",
		year: "1986",
		subscriptionFee: "Adultes : 75€ par an, Juniors : 60€ par an.",
		description:
			"Iznogood est un club compétitif mais accueuille également les joueurs qui souhaitent évoluer en loisirs, sur le créneau du lundi. Venez nous rencontrer !",
		role: "Club",
	},
	{
		email: "parisfemininfc200900@gmail.com",
		password: "1234",
		clubName: "Paris Féminin Football Club",
		image:
			"http://parisfemininfc.fr/wp-content/uploads/2020/02/LOGO-PARIS-FFC2-570.png",
		location: {
			type: "Point",
			coordinates: [2.347191915360213, 48.83252762569717],
			formattedAddress: "19 Rue Corvisart, 75013 Paris, France",
		},
		phoneNumber: "0659227833",
		website: "http://parisfemininfc.fr/",
		year: "2009",
		subscriptionFee: "Adultes : 90€ par an, Juniors : 50€ par an.",
		description:
			"Née en 2009 d’une volonté de promouvoir et de faciliter l’accès au sport pour les femmes, le Paris Féminin Football club, domiciliée dans l’est parisien et plus particulièrement dans les 13ème arrondissement mène depuis sa création et via les membres de son bureau et encadrement sportif des actions pour développer et encourager les pratiques sportives chez les jeunes filles dès 7 ans.",
		role: "Club",
	},
	{
		email: "secretariat@vga-fr.org",
		password: "1234",
		clubName: "VGA Saint-Maur",
		image: "http://www.vga-fr.org/images/OMNISPORTS/2019/vga_omnisports.png",
		location: {
			type: "Point",
			coordinates: [2.4932, 48.7939],
			formattedAddress: "8 avenue du Nord, 94100 Saint-Maur-des-Fossés, France",
		},
		phoneNumber: "0148834424",
		website: "http://http://www.vga-fr.org/",
		year: "1919",
		subscriptionFee:
			"Consulter notre site: http://www.vga-fr.org/index.php/football-feminin",
		description:
			"Cette année encore, de nombreux résultats sportifs ont permis au club d’être parmi les plus grands de France et de faire rayonner notre ville, notre département et notre club aux plus hauts niveaux national, européen et mondial. Nous sommes, grâce aux bénévoles et aux encadrants salariés, le 4 ème club français avec plus de 10 100 adhérents. Pour plus de détails, consulter ces page : http://www.vga-fr.org/index.php/football-feminin, https://www.facebook.com/VGASMFF, http://club.quomodo.com/vga-footfeminin. INSCRIPTIONS & RENSEIGNEMENTS : Club-House du Stade Marin, 30 bd de Champigny, Saint-Maur.",
		role: "Club",
	},
	{
		email: "contact00@vikingclubparis.org",
		password: "1234",
		clubName: "Viking Club Paris",
		image:
			"https://www.vikingclubparis.org/wp-content/uploads/2020/02/LOGO.png",
		location: {
			type: "Point",
			coordinates: [2.362267271138876, 48.86414000000147],
			formattedAddress: "5 Rue Perrée, 75003 Paris, France",
		},
		phoneNumber: "0771269000",
		website: "https://www.vikingclubparis.org/",
		year: "2009",
		subscriptionFee:
			"Le montant de la cotisation est de 250€ par an qu’il s’agisse d’une  équipe compétition, loisirs, ou de l’académie (jeunes).",
		description:
			"Fondé par Gustave Tollgerdt, le Viking Club Paris est une aventure collective centrée autour de valeurs fortes : l’égalité, le respect et la solidarité. Cette aventure s’appuie sur plus d’une trentaine de bénévoles qui font vivre un club riche de 600 adhérents (saison 2019/2020) autour de trois sports : le football, le futsal, et le basketball. Le club s’engage depuis sa création pour la promotion et la démocratisation du sport féminin, avec l’objectif de féminiser les sports collectifs et de permettre aux jeunes filles et femmes de les pratiquer en “loisirs” et en compétition.  Le club permet aussi à une centaine de jeunes de pratiquer le football, le futsal et le basketball au sein de son Académie pour leur permettre de vivre pleinement leur passion en bénéficiant de coaches dévoués et d’installations de qualité dans le centre de Paris. Notre club est plein d’ambition : après avoir réussi à développer la pratique de trois sports en moins 10 ans, nous souhaitons ouvrir dès 2023 une section rugby et une section volleyball. Il nous semble important de pouvoir accompagner les grands événements sportifs qui vont rythmer la vie de la capitale dans les prochaines années : la Coupe du Monde de Rugby en 2023 et les Jeux Olympiques en 2024. Venez nous rejoindre et vous engager à nos côtés en tant que joueurs, joueuses, bénévole, ou partenaire, nous vous accueillons à bras ouverts !",
		role: "Club",
	},
];

module.exports = clubsList;
