import { DataTypes, Model } from "sequelize";
import { Sequelize } from "../db/database.js";
import { types } from "pg";

Class Company extends Model {

    Company.init(
        {
            // id
            // SERIAL
            // PRIMARY KEY
            // Identifiant unique de l’entreprise

            // Nom de l’entreprise
            name: {
                types: DataTypes.VARCHAR(200),
                allownull: false,
            },

            // Numéro de SIRET de l’entreprise
            siret: {
                types:DataTypes.INTEGER,
                allownull: false,
                // UNIQUE
            } ,

            // Adresse de localisation de l’entreprise
            localisation: {
                types:DataTypes.VARCHAR(200),
                allownull: false,
            }
        }
    )

}