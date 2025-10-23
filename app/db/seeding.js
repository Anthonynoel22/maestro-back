import sequelize from "./database.js";
import { User, Projet, Company, Preview, Genre, MessageContact, Description } from "../models/index.js";


try {
    await sequelize.sync({ force: true });
    
//     company
    await Company.create({
        name: 'Entreprise 1',
        siret: "12345678912345",
        localisation: 'Paris',
    });
    await Company.create({
        name: 'Entreprise 2',
        siret: "22345678912345",
        localisation: 'Lyon',
    });
    await Company.create({
        name: 'Entreprise 3',
        siret: "32345678912345",
        localisation: 'Nice',
    });
    await Company.create({
        name: 'Entreprise 4',
        siret: "42345678912345",
        localisation: 'Bordeaux',
    });
    


    await Preview.create({
        title: "Extrait 1",
        isStar: false,
        date: new Date("2025-01-01")
    }),
    await Preview.create({
        title: "Extrait 2",
        isStar: false,
        date: new Date("2025-03-03")
    }),
    await Preview.create({
        title: "Extrait 3",
        isStar: true,
        date: new Date("2025-05-05")
    })

    // messages-contact
    await MessageContact.create({
        mail: 'test1@test.com',
        message: 'Maestro is magic'
    });
    await MessageContact.create({
        mail: 'test2@test.com',
        message: 'Maestro les meilleurs',
    });
    await MessageContact.create({
        mail: 'test3@test.com',
        message: 'Maestro all over teh world',
    });

    // Description-portfolio
    await Description.create({
        title: 'Title1',
        image_link: 'Image1',
        text: 'Text1'
    });
    await Description.create({
        title: 'Title2',
        image_link: 'Image2',
        text: 'Text1'
    });
    await Description.create({
        title: 'Title3',
        image_link: 'Image3',
        text: 'Text3'
    });


    await Genre.create({
        label: "classique"
    });
    await Genre.create({
        label: "rock"
    });
    await Genre.create({
        label: "jazz"
    });

    const genres = await Genre.findAll();
    const previews = await Preview.findAll();

    await previews[0].addListGenres([genres[0], genres[2]]);
    await previews[1].addListGenres([genres[1], genres[2]]);
    await previews[2].addListGenres([genres[0]]);

} catch (error) {
    console.error(error);
}