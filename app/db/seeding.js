import sequelize from "./database.js";
import { User, Projet, Company, Preview, Genre, MessageContact } from "../models/index.js";

try {
    // compagny
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
    
    // await Company.create({
    //     name: 'Entreprise 1',
    //     siret: "12345678912345",
    //     localisation: 'Paris',
    // });
    // await Company.create({
    //     name: 'Entreprise 2',
    //     siret: "22345678912345",
    //     localisation: 'Lyon',
    // });
    // await Company.create({
    //     name: 'Entreprise 3',
    //     siret: "32345678912345",
    //     localisation: 'Nice',
    // });
    // await Company.create({
    //     name: 'Entreprise 4',
    //     siret: "42345678912345",
    //     localisation: 'Bordeaux',
    // });


    await Preview.create({
        title: "Extrait 1",
        isStar: false
    }),
    await Preview.create({
        title: "Extrait 2",
        isStar: false
    }),
    await Preview.create({
        title: "Extrait 3",
        isStar: true
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

} catch (error) {
    console.error(error);
}