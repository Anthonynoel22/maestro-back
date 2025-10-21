import Preview from "./previewModel.js";
import Genre from "./genreModel.js";
import User from "./userModel.js";
import Company from "./compagnyModel.js";
import Projet from "./projetModel.js";
import MessageContact from "./messageContactModel.js"

// DEFINITION DE LA TABLE DE LIAISON ENTRE LES TABLES GENRE ET PREVIEW

// une Preview peut avoir plusieurs Genres
Preview.belongsToMany(Genre, {
	through: "preview_genre", // nom de la table de liaison
	foreignKey: "preview_id", // comment la clé de Preview sera écrite sur la table de liaison
    otherKey: "genre_id", // other key fait référence à la clé de l'autre table (ici de la table genre)
    as: "listGenres" // l'alias qu'on donne pour récupérer l'ensemble des genres d'une preview ex: preview.listGenres
});

// un Genre peut avoir plusieurs Previews
Genre.belongsToMany(Preview, {
    through: "preview_genre", // nom de la table de liaison
    foreignKey: "genre_id", // comment la clé de Genre sera écrite sur la table de liaison
    otherKey: "preview_id", // other key fait référence à la clé de l'autre table (ici de la table preview)
    as: "listPreviews" // l'alias qu'on donne pour récupérer l'ensemble des previews d'un genre ex: genre.listPreviews
});



// Associations
// as = alias (C'est le nom qu'on va utiliser pour acceder à l'autre table)

// Un utilisateur demande 0 ou plusieurs projet
// "Un User a plusieur Projet et le lien entre User et Projet c'est user_id"
User.hasMany(Projet, {
    foreignKey: "user_id",
    as: "listProjets",
});

// Un projet est demandé par 1 seul utilisateur
// "Un Projet Appartient à un User et le lien entre User et Projet c'est aussi user_id"
Projet.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
});

// Un utilisateur travaille dans une seul entreprise
// "Un User Appartient à une Company et le lien entre User et company c'est company_id"
User.belongsTo(Company, {
    foreignKey: "company_id",
    as: "company",
});

// Une entreprise peut avoir plusieurs utilisateurs
// "Une Company a plusieur User et le lien entre Company et User c'est company_id"
Company.hasMany(User, {
    foreignKey: "company_id",
    as: "listUsers",
});

export { User, Projet, Company, Preview, Genre, MessageContact };

