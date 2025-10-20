import sequelize from "./database.js";
import { User, Projet, Company, Preview, Genre } from "../models/index.js";

try {
    
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

} catch (error) {
    console.error(error);
}