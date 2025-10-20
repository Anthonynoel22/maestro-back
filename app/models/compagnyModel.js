import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class Company extends Model {}

Company.init(
    {
        // Identifiant unique de l’entreprise
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        // Nom de l’entreprise
        name: {
            type: DataTypes.STRING,
            allownull: false,
        },

        // Numéro de SIRET de l’entreprise
        siret: {
            type: DataTypes.STRING,
            allownull: false,
            unique: true,
        },

        // Adresse de localisation de l’entreprise
        localisation: {
            type: DataTypes.STRING,
            allownull: false,
        },
    },
    {
        sequelize,
        modelName: "Company",
        tableName: "company",
        timestamps: false,
    }
);

export default Company;
