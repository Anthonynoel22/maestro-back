import Preview from "./previewModel.js";
import Genre from "./genreModel.js";
import User from "./userModel.js";
import Company from "./companyModel.js";
import Projet from "./projetModel.js";
import MessageContact from "./messageContactModel.js";

// -------------------------
// TABLE DE LIAISON GENRE / PREVIEW
// -------------------------

// Une Preview peut avoir plusieurs Genres
Preview.belongsToMany(Genre, {
    through: "preview_genre",
    foreignKey: "preview_id",
    otherKey: "genre_id",
    as: "genres" // alias corrigé
});

// Un Genre peut avoir plusieurs Previews
Genre.belongsToMany(Preview, {
    through: "preview_genre",
    foreignKey: "genre_id",
    otherKey: "preview_id",
    as: "previews" // alias corrigé
});

// -------------------------
// ASSOCIATIONS USER / PROJET
// -------------------------

// Un utilisateur peut avoir plusieurs projets
User.hasMany(Projet, {
    foreignKey: "user_id",
    as: "projets"
});

// Un projet appartient à un utilisateur
Projet.belongsTo(User, {
    foreignKey: "user_id",
    as: "owner" // alias unique pour éviter conflit
});

// -------------------------
// ASSOCIATIONS USER / COMPANY
// -------------------------

// Un utilisateur appartient à une entreprise
User.belongsTo(Company, {
    foreignKey: "company_id",
    as: "company"
});

// Une entreprise peut avoir plusieurs utilisateurs
Company.hasMany(User, {
    foreignKey: "company_id",
    as: "users"
});

export { User, Projet, Company, Preview, Genre, MessageContact };
