import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";
import User from "./userModel.js"; // adapte le chemin si nécessaire
import Company from "./companyModel.js";
import Genre from "./genreModel.js";
import Preview from "./previewModel.js";

class Projet extends Model {}

export const STATUS = [ 
  "à commencer",
  "en cours",
  "attente retour",
  "terminé",
  "attente acceptation"
];

Projet.init(
  {
    // ID unique du projet
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Nom du projet
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Description du projet
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
  },
    // Statut du projet
    status: {
      type: DataTypes.ENUM(...STATUS),
      defaultValue: "attente acceptation",
    },
    // Date limite du projet
    deadline: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Projet",
    tableName: "projet",
    timestamps: true,
  }
);


export default Projet;
