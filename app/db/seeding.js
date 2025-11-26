import sequelize from "./database.js";
import {
    User,
    Projet,
    Company,
    Preview,
    Genre,
    MessageContact,
    Description,
} from "../models/index.js";
import bcrypt from "bcryptjs";

try {
    await sequelize.sync({ force: true });
    // compagny
    await Company.create({
        name: "Syntaxe Solutions",
        siret: "50123456789011",
        localisation: "Paris",
    });

    await Company.create({
        name: "Pixel & Pipeline",
        siret: "51123456789022",
        localisation: "Lyon",
    });

    await Company.create({
        name: "Flexbox Industries",
        siret: "52123456789033",
        localisation: "Marseille",
    });

    await Company.create({
        name: "Reactify Labs",
        siret: "53123456789044",
        localisation: "Toulouse",
    });

    await Company.create({
        name: "NPM Factory",
        siret: "54123456789055",
        localisation: "Lille",
    });

    await Company.create({
        name: "Gitflow Enterprise",
        siret: "55123456789066",
        localisation: "Strasbourg",
    });

    await Company.create({
        name: "Async & Await Corp",
        siret: "56123456789077",
        localisation: "Montpellier",
    });

    await Company.create({
        name: "DevOps Dynamics",
        siret: "57123456789088",
        localisation: "Nantes",
    });

    await Company.create({
        name: "Hookify Studio",
        siret: "58123456789099",
        localisation: "Nice",
    });

    await Company.create({
        name: "Kernel Tech Group",
        siret: "59123456789100",
        localisation: "Grenoble",
    });

    await Company.create({
        name: "Twig & Template SARL",
        siret: "60123456789111",
        localisation: "Bordeaux",
    });

    await Company.create({
        name: "SassStructure",
        siret: "61123456789122",
        localisation: "Rennes",
    });

    await Company.create({
        name: "UXCraft Studio",
        siret: "62123456789133",
        localisation: "Orléans",
    });

    await Company.create({
        name: "Datastream Dynamics",
        siret: "63123456789144",
        localisation: "Rouen",
    });

    await Company.create({
        name: "FullStack Flow",
        siret: "64123456789155",
        localisation: "Nancy",
    });

    // Tests seeding pour les previews
    // await Preview.create({
    //     title: "Extrait 1",
    //     isStar: false,
    //     date: new Date("2025-01-01"),
    // }),
    //     await Preview.create({
    //         title: "Extrait 2",
    //         isStar: false,
    //         date: new Date("2025-03-03"),
    //     }),
    //     await Preview.create({
    //         title: "Extrait 3",
    //         isStar: true,
    //         date: new Date("2025-05-05"),
    //     }),
        // await Preview.create({
        //     title: "Extrait à supprimer",
        //     isStar: true,
        //     date: new Date("2025-06-06"),
        //     link: "uploads/RAYE - WHERE IS MY HUSBAND! (Official Music Video).mp3-1761222883667-884693652"
        // })

        // messages-contact
        await MessageContact.create({
            mail: "test1@test.com",
            message: "Maestro is magic",
        });
    await MessageContact.create({
        mail: "test2@test.com",
        message: "Maestro les meilleurs",
    });
    await MessageContact.create({
        mail: "test3@test.com",
        message: "Maestro all over teh world",
    });

    // user

    const passwordHashed1 = await bcrypt.hash("gargouille3001", 10);
    await User.create({
        firstname: "Lena",
        lastname: "Webhook",
        phonenumber: "0612345001",
        email: "lena.webhook@exemple.com",
        password: passwordHashed1,
        localisation: "12 Rue du Terminal, 75010 Paris",
    });

    const passwordHashed2 = await bcrypt.hash("gargouille3002", 10);
    await User.create({
        firstname: "Noah",
        lastname: "Frontend",
        phonenumber: "0612345002",
        email: "noah.frontend@exemple.com",
        password: passwordHashed2,
        localisation: "4 Avenue du Flexbox Étendu, 13005 Marseille",
    });

    const passwordHashed3 = await bcrypt.hash("gargouille3003", 10);
    await User.create({
        firstname: "Mina",
        lastname: "Tailwind",
        phonenumber: "0612345003",
        email: "mina.tailwind@exemple.com",
        password: passwordHashed3,
        localisation: "55 Impasse des Classes Utilitaires, 44000 Nantes",
    });

    const passwordHashed4 = await bcrypt.hash("gargouille3004", 10);
    await User.create({
        firstname: "Hugo",
        lastname: "Gitflow",
        phonenumber: "0612345004",
        email: "hugo.gitflow@exemple.com",
        password: passwordHashed4,
        localisation: "89 Boulevard du Commit Rapide, 69006 Lyon",
    });

    const passwordHashed5 = await bcrypt.hash("gargouille3005", 10);
    await User.create({
        firstname: "Ely",
        lastname: "Sass",
        phonenumber: "0612345005",
        email: "ely.sass@exemple.com",
        password: passwordHashed5,
        localisation: "29 Rue du Mixin Réutilisable, 35000 Rennes",
    });

    const passwordHashed6 = await bcrypt.hash("gargouille3006", 10);
    await User.create({
        firstname: "Jade",
        lastname: "Bootstrap",
        phonenumber: "0612345006",
        email: "jade.bootstrap@exemple.com",
        password: passwordHashed6,
        localisation: "17 Place de la Grid Responsive, 31000 Toulouse",
    });

    const passwordHashed7 = await bcrypt.hash("gargouille3007", 10);
    await User.create({
        firstname: "Ilan",
        lastname: "APIrest",
        phonenumber: "0612345007",
        email: "ilan.api@exemple.com",
        password: passwordHashed7,
        localisation: "102 Route du Endpoint JSON, 21000 Dijon",
    });

    const passwordHashed8 = await bcrypt.hash("gargouille3008", 10);
    await User.create({
        firstname: "Chloé",
        lastname: "Npm",
        phonenumber: "0612345008",
        email: "chloe.npm@exemple.com",
        password: passwordHashed8,
        localisation: "8 Allée des Dépendances, 59800 Lille",
    });

    const passwordHashed9 = await bcrypt.hash("gargouille3009", 10);
    await User.create({
        firstname: "Marius",
        lastname: "Debugger",
        phonenumber: "0612345009",
        email: "marius.debug@exemple.com",
        password: passwordHashed9,
        localisation: "36 Rue du Console.Warn, 67000 Strasbourg",
    });

    const passwordHashed10 = await bcrypt.hash("gargouille3010", 10);
    await User.create({
        firstname: "Elisa",
        lastname: "Promise",
        phonenumber: "0612345010",
        email: "elisa.promise@exemple.com",
        password: passwordHashed10,
        localisation: "14 Avenue des Async Await, 34000 Montpellier",
    });

    const passwordHashed11 = await bcrypt.hash("gargouille3011", 10);
    await User.create({
        firstname: "Théo",
        lastname: "Nodecore",
        phonenumber: "0612345011",
        email: "theo.nodecore@exemple.com",
        password: passwordHashed11,
        localisation: "76 Chemin du Non-Blocking IO, 44000 Nantes",
    });

    const passwordHashed12 = await bcrypt.hash("gargouille3012", 10);
    await User.create({
        firstname: "Nora",
        lastname: "Routing",
        phonenumber: "0612345012",
        email: "nora.router@exemple.com",
        password: passwordHashed12,
        localisation: "3 Rue de la Route Paramétrée, 80000 Amiens",
    });

    const passwordHashed13 = await bcrypt.hash("gargouille3013", 10);
    await User.create({
        firstname: "Yanis",
        lastname: "Component",
        phonenumber: "0612345013",
        email: "yanis.component@exemple.com",
        password: passwordHashed13,
        localisation: "2 Rue du State Lifting, 33000 Bordeaux",
    });

    const passwordHashed14 = await bcrypt.hash("gargouille3014", 10);
    await User.create({
        firstname: "Sara",
        lastname: "Vitepress",
        phonenumber: "0612345014",
        email: "sara.vite@exemple.com",
        password: passwordHashed14,
        localisation: "77 Sentier du Hot Reload, 72000 Le Mans",
    });

    const passwordHashed15 = await bcrypt.hash("gargouille3015", 10);
    await User.create({
        firstname: "Leo",
        lastname: "Linux",
        phonenumber: "0612345015",
        email: "leo.linux@exemple.com",
        password: passwordHashed15,
        localisation: "120 Rue de la Distribution Ubuntu, 59000 Lille",
    });

    const passwordHashed16 = await bcrypt.hash("gargouille3016", 10);
    await User.create({
        firstname: "Ava",
        lastname: "Kernel",
        phonenumber: "0612345016",
        email: "ava.kernel@exemple.com",
        password: passwordHashed16,
        localisation: "44 Avenue du SysCall, 06000 Nice",
    });

    const passwordHashed17 = await bcrypt.hash("gargouille3017", 10);
    await User.create({
        firstname: "Rayan",
        lastname: "Dockerfile",
        phonenumber: "0612345017",
        email: "rayan.docker@exemple.com",
        password: passwordHashed17,
        localisation: "7 Quai du Container Léger, 44000 Nantes",
    });

    const passwordHashed18 = await bcrypt.hash("gargouille3018", 10);
    await User.create({
        firstname: "Lila",
        lastname: "Compose",
        phonenumber: "0612345018",
        email: "lila.compose@exemple.com",
        password: passwordHashed18,
        localisation: "19 Rue du Multi-Service.yml, 35000 Rennes",
    });

    const passwordHashed19 = await bcrypt.hash("gargouille3019", 10);
    await User.create({
        firstname: "Ibrahim",
        lastname: "Symfony",
        phonenumber: "0612345019",
        email: "ibrahim.symfony@exemple.com",
        password: passwordHashed19,
        localisation: "8 Rue des Routes Annotations, 67000 Strasbourg",
    });

    const passwordHashed20 = await bcrypt.hash("gargouille3020", 10);
    await User.create({
        firstname: "Maya",
        lastname: "Twig",
        phonenumber: "0612345020",
        email: "maya.twig@exemple.com",
        password: passwordHashed20,
        localisation: "41 Rue du Template Hérité, 13004 Marseille",
    });

    const passwordHashed21 = await bcrypt.hash("gargouille3021", 10);
    await User.create({
        firstname: "Victor",
        lastname: "Composer",
        phonenumber: "0612345021",
        email: "victor.composer@exemple.com",
        password: passwordHashed21,
        localisation: "6 Boulevard des Dépendances PHP, 69009 Lyon",
    });

    const passwordHashed22 = await bcrypt.hash("gargouille3022", 10);
    await User.create({
        firstname: "Eléa",
        lastname: "Regex",
        phonenumber: "0612345022",
        email: "elea.regex@exemple.com",
        password: passwordHashed22,
        localisation: "98 Impasse du Groupe Capturant, 75018 Paris",
    });

    const passwordHashed23 = await bcrypt.hash("gargouille3023", 10);
    await User.create({
        firstname: "Nino",
        lastname: "TypeScript",
        phonenumber: "0612345023",
        email: "nino.ts@exemple.com",
        password: passwordHashed23,
        localisation: "12 Route des Types Stricts, 31000 Toulouse",
    });

    const passwordHashed24 = await bcrypt.hash("gargouille3024", 10);
    await User.create({
        firstname: "Oceane",
        lastname: "Pipeline",
        phonenumber: "0612345024",
        email: "oceane.pipeline@exemple.com",
        password: passwordHashed24,
        localisation: "3 Allée de l'Intégration Continue, 21000 Dijon",
    });

    const passwordHashed25 = await bcrypt.hash("gargouille3025", 10);
    await User.create({
        firstname: "Evan",
        lastname: "Breakpoint",
        phonenumber: "0612345025",
        email: "evan.breakpoint@exemple.com",
        password: passwordHashed25,
        localisation: "88 Rue du Debuggage Minutieux, 83000 Toulon",
    });

    const passwordHashed26 = await bcrypt.hash("gargouille3026", 10);
    await User.create({
        firstname: "Ines",
        lastname: "Hooks",
        phonenumber: "0612345026",
        email: "ines.hooks@exemple.com",
        password: passwordHashed26,
        localisation: "13 Chemin du UseEffect, 25000 Besançon",
    });

    const passwordHashed27 = await bcrypt.hash("gargouille3027", 10);
    await User.create({
        firstname: "Matteo",
        lastname: "Render",
        phonenumber: "0612345027",
        email: "matteo.render@exemple.com",
        password: passwordHashed27,
        localisation: "54 Rue des Rerenders Inutiles, 75019 Paris",
    });

    const passwordHashed28 = await bcrypt.hash("gargouille3028", 10);
    await User.create({
        firstname: "Aya",
        lastname: "Viewport",
        phonenumber: "0612345028",
        email: "aya.viewport@exemple.com",
        password: passwordHashed28,
        localisation: "2 Place du Responsive Design, 86000 Poitiers",
    });

    const passwordHashed29 = await bcrypt.hash("gargouille3029", 10);
    await User.create({
        firstname: "Tim",
        lastname: "Algorithm",
        phonenumber: "0612345029",
        email: "tim.algo@exemple.com",
        password: passwordHashed29,
        localisation: "9 Allée du Tri Fusion, 45100 Orléans",
    });

    const passwordHashed30 = await bcrypt.hash("gargouille3030", 10);
    await User.create({
        firstname: "Meline",
        lastname: "Session",
        phonenumber: "0612345030",
        email: "meline.session@exemple.com",
        password: passwordHashed30,
        localisation: "43 Rue du Cookie Securisé, 14000 Caen",
    });

    const passwordHashed31 = await bcrypt.hash("gargouille2026", 10);
    await User.create({
        email: "robin.syntaxe@exemple.com",
        password: passwordHashed31,
        role: "admin",
    });

    const passwordHashed32 = await bcrypt.hash("gargouille2027", 10);
    await User.create({
        email: "camille.script@exemple.com",
        password: passwordHashed32,
    });

    const passwordHashed33 = await bcrypt.hash("gargouille2028", 10);
    await User.create({
        lastname: "Flexbox",
        firstname: "Alex",
        phonenumber: "1112131415",
        email: "alex.flexbox@exemple.com",
        password: passwordHashed33,
        localisation: "42 Rue du Console.log 69008 Lyon",
    });

    const passwordHashed34 = await bcrypt.hash("gargouille2029", 10);
    await User.create({
        email: "zoe.pixel@exemple.com",
        password: passwordHashed34,
    });

    // Description-portfolio
    await Description.create({
        title: "Présentation du compositeur",
        image_link: "/app/imageUploads/extrait_partition_piano.jpg-1762951957132-718357379",
        number : 1,
        text:"Je suis Clément Vanier, compositeur passionné, inspiré aussi bien par la musique orchestrale que par l’électro et les sonorités du monde. J’aime créer des œuvres sur-mesure pour le cinéma, le jeu vidéo, la publicité ou tout autre projet créatif. Pour moi, chaque composition est une histoire à raconter, une émotion à faire naître. Sur Maestro, je présente mon portfolio, véritable reflet de mon parcours et de mes explorations musicales. Vous pouvez y écouter mes extraits, découvrir mon univers et ressentir l’identité de mon travail. Grâce à un espace d’échange dédié, je communique facilement avec mes clients et reste disponible à chaque étape. Je propose des prestations adaptées, de la création originale jusqu’au mixage final. Maestro est pour moi un atelier numérique complet, où j’organise, partage et suis l’avancement de chaque projet. Mon ambition : rendre la musique accessible, vivante et profondément personnelle. Bienvenue dans mon univers sonore.",
    });  
        await Description.create({
        title: "Mes prestations",
        image_link: "app/imageUploads/partition-de-musique-1.jpg-1763129659379-403260838",
        number : 2,
        text:"Je propose un accompagnement musical personnalisé, que vous soyez un professionnel ou un particulier. Pour les projets audiovisuels – films, jeux vidéo, publicités ou podcasts – je compose des musiques originales et adaptées à chaque univers. J’imagine également des identités sonores pour les marques, entreprises et créateurs de contenu. Pour les particuliers, je réalise des compositions uniques pour des moments forts : mariage, anniversaire, naissance ou hommage. Vous pouvez aussi faire appel à moi pour créer une chanson personnalisée, pensée spécialement pour une personne ou un événement. J’assure la création d’ambiances, de thèmes musicaux et d’arrangements sur mesure. Je peux retravailler ou réorchestrer une œuvre existante afin de lui donner une nouvelle vie. Le mixage et la finition audio font partie de mes prestations pour garantir un rendu professionnel. Chaque projet est construit en dialogue avec vous, pour coller à votre émotion, votre message ou votre identité. Mon ambition : transformer vos idées en musique et faire de chaque son un souvenir marquant",
    });  
/*      await Description.create({
        title: "Title3",
        image_link: "/app/imagesUploads/",
        number : 1,
        text: "Text3",
    });   */

    await Genre.create({
        label: "classique",
    });
    await Genre.create({
        label: "rock",
    });
    await Genre.create({
        label: "jazz",
    });

    // Project
    await Projet.create({
        name: "Composition d'une bande originale",
        resume: "Bonjour, j’aurais besoin de vos services pour composer une petite bande originale destinée à un court-métrage. L’ambiance doit être douce et un peu mystérieuse. Merci d’avance.",
        status: "en cours",
        deadline: new Date("2025-05-05"),
    });
    await Projet.create({
        name: "Mixage de l'EP 'Nuit Chromatique",
        resume: "Bonjour, je souhaiterais faire mixer mon EP de 5 titres. Je cherche un rendu propre, moderne et assez aérien. Pourriez-vous vous en occuper s’il vous plaît ?",
        status: "à commencer",
        deadline: new Date("2025-05-05"),
    });
    await Projet.create({
        name: "Mastering du single 'Éclipse",
        resume: "Bonjour, j’ai besoin d’un mastering professionnel pour mon prochain single. L’objectif est de le diffuser sur les plateformes et d’obtenir un son bien équilibré. Merci pour votre travail.",
        status: "terminé",
        deadline: new Date("2025-05-05"),
    });
    await Projet.create({
        name: "Création d'un habillage sonore pour une chaîne YouTube",
        resume: "Bonjour, je souhaiterais votre aide pour créer un habillage sonore complet pour ma chaîne YouTube. J’aurais besoin d’un jingle d’intro, d’une petite musique de fond et de quelques effets sonores. Merci beaucoup pour votre disponibilité.",
        status: "attente acceptation",
        deadline: new Date("2025-07-01"),
    });
    await Projet.create({
        name: "Arrangement acoustique d’un morceau personnel",
        resume: "Bonjour, j’aurais besoin de vos services pour réarranger l’un de mes morceaux en version acoustique. J’aimerais quelque chose de plus doux, centré sur guitare et voix. Merci pour votre aide.",
        status: "attente retour",
        deadline: new Date("2025-08-10"),
    });

    const users = await User.findAll();
    const companies = await Company.findAll();
    const genres = await Genre.findAll();
    const previews = await Preview.findAll();

    // await companies[0].addListUsers([users[0]]);
    // await companies[1].addListUsers([users[1]]);

    const mapping = [
        [0, 0],
        [1, 3],
        [2, 7],
        [3, 10],
        [4, 14],
        [5, 18],
        [6, 22],
        [7, 25],
        [8, 2],
        [9, 5],
        [10, 9],
        [11, 12],
        [12, 16],
        [13, 20],
        [14, 27],
    ];

    for (const [ci, ui] of mapping) {
        await companies[ci].addListUsers([users[ui]]); // Company.hasMany(User, { as: "listUsers" })
    }

    // await previews[0].addListGenres([genres[0], genres[2]]);
    // await previews[1].addListGenres([genres[1], genres[2]]);
    // await previews[2].addListGenres([genres[0]]);
} catch (error) {
    console.error(error);
}
