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

// ASSOCIATIONS :

// Un projet appartient à un utilisateur
Projet.belongsTo(User, { foreignKey: "user_id", as: "user" });
// Un projet appartient à une entreprise
Projet.belongsTo(Company, { foreignKey: "company_id", as: "company" });
// Un projet peut avoir plusieurs genres & un genre peut appartenir à plusieurs projets
Projet.belongsToMany(Genre, {
  through: "projet_genre",
  foreignKey: "projet_id",
  otherKey: "genre_id",
  as: "genres",
});
// Un projet peut avoir plusieurs extraits
Projet.hasMany(Preview, { foreignKey: "projet_id", as: "previews" });

export default Projet;
