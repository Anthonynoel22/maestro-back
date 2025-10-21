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
            allowNull: false,
        },

        // Numéro de SIRET de l’entreprise
        siret: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        // Adresse de localisation de l’entreprise
        localisation: {
            type: DataTypes.STRING,
            allowNull: false,
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
