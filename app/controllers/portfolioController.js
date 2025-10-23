import { User, Projet, Company, Preview, Genre } from "../models/index.js";

const portfolioController = {

    // GET /api/portfolio
    findAll: async (req, res) => {
        try {
            const projets = await Projet.findAll({
                include: [
                    {
                        model: User,
                        as: "owner",           // alias plus clair
                        include: [
                            { model: Company, as: "company" }
                        ]
                    },
                    { model: Genre, as: "genres" },       // alias clair
                    { model: Preview, as: "previews" }    // alias clair
                ]
            });

            if (projets.length > 0) {
                res.json(projets);
            } else {
                res.status(404).json({ message: "Aucun projet trouvé" });
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des projets :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // GET /api/portfolio/:id
    findById: async (req, res) => {
        try {
            const { id } = req.params;
            const projet = await Projet.findByPk(id, {
                include: [
                    {
                        model: User,
                        as: "owner",
                        include: [
                            { model: Company, as: "company" }
                        ]
                    },
                    { model: Genre, as: "genres" },
                    { model: Preview, as: "previews" }
                ]
            });

            if (!projet) {
                return res.status(404).json({ message: `Projet ${id} introuvable` });
            }

            res.json(projet);
        } catch (error) {
            console.error("Erreur lors de la récupération du projet :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // POST /api/portfolio
    create: async (req, res) => {
        try {
            const data = req.body;
            const newProjet = await Projet.create(data);
            res.status(201).json(newProjet);
        } catch (error) {
            console.error("Erreur lors de la création du projet :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // PATCH /api/portfolio/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;

            const projet = await Projet.findByPk(id);
            if (!projet) {
                return res.status(404).json({ message: "Projet non trouvé" });
            }

            await projet.update(updateData);
            res.json(projet);
        } catch (error) {
            console.error("Erreur lors de la mise à jour du projet :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // DELETE /api/portfolio/:id
    remove: async (req, res) => {
        try {
            const { id } = req.params;

            const projet = await Projet.findByPk(id);
            if (!projet) {
                return res.status(404).json({ message: "Projet non trouvé" });
            }

            await projet.destroy();
            res.json({ message: `Projet ${id} supprimé avec succès` });
        } catch (error) {
            console.error("Erreur lors de la suppression du projet :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    }

};

export default portfolioController;
