import {User, Projet, Company, Preview, Genre} from "../models/index.js";

const genresController = { 

    // Lister tous les genres
    async getAllGenres(req,res) {
        try {
            const genres = await Genre.findAll();
            if (genres.length > 0) {
                res.json(genres);
            } else {
                res.status(404).json({message: "Aucun genre trouvé"});
            }
        } catch (error) {
            console.error ("Erreur lors de la recherche des genres :", error );
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    },

    // Ajouter un genre
    async addAGenre (req, res) {
        const datas = req.body;
        try {
            const newGenre = await Genre.create(datas);
            res.json(newGenre);
        } catch (error) {
            console.error("Erreur lors de la création du genre :", error);
            res.status(500).json({ error: "Erreur interne du serveur"});
        }
    },

    // Modifier un genre
    async updateGenre (req, res) {
        const {id} = req.params;
        const datas = req.body;
        try {
            const genre = await Genre.findByPk(id);
            if (!genre) {
                return res.status(404).json({ message: "Aucun genre trouvé"});
            }
            await genre.update(req.body);
            res.json(genre);
        } catch (error) {
            console.error ("Erreur lors de la modification du genre :", error);
            res.status(500).json({ error: "Erreur interne du serveur"});
        }
    },

    // Supprimer un genre
    async deleteGenre (req, res) {
        const { id } = req.params;
        try {
            const genre = await Genre.findByPk(id);
            if (!genre) {
                return res.status(404).json({ message: "Aucun genre trouvé" });
            }
            await genre.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Erreur lors de la suppression du genre :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },
};

export default genresController;