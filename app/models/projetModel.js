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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false,
  },
    status: {
      type: DataTypes.ENUM(...STATUS),
      defaultValue: "attente acceptation",
    },
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

// Associations
Projet.belongsTo(User, { foreignKey: "user_id", as: "user" });
Projet.belongsTo(Company, { foreignKey: "company_id", as: "company" });
Projet.belongsToMany(Genre, {
  through: "projet_genre",
  foreignKey: "projet_id",
  otherKey: "genre_id",
  as: "genres",
});
Projet.hasMany(Preview, { foreignKey: "projet_id", as: "previews" });

export default Projet;
