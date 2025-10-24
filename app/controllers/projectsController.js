import {User, Projet, Company, Preview, Genre} from "../models/index.js";

const projectsController = {
    //Admin

    // Voir toute la liste des projets
    getAllProjects : async (req, res) => {
        try {
            const projects = await Projet.findAll();
            if (projects.length > 0) {
                res.json(projects);
            } else {
                res.status(404).json({ message: "Aucun projet trouvé" });
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des projets :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Trier les projets par statuts
    sortProjectsByStatus : async (req, res)  =>{
        try {
            const { status } = req.query;
            if (!status) {
                return res.status(400).json({ message: "Le paramètre 'status' est requis" });
            }
            const projects = await Projet.findAll({where: { status }});
            if (projects.length > 0) {
                res.json(projects);
            } else {
                res.status(404).json({
                    message: "Aucun projet trouvé pour ce statut",
                });
            }
        } catch (error) {
            console.error("Erreur lors du filtrage des projets :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },


    //Modifier le statut
    updateStatus: async (req, res)  =>{
        const { id } = req.params;
        const datas = req.body;
        try {
            const project = await Projet.findByPk(id);
            if (!project) {
                return res.status(404).json({ message: "Aucun projet trouvé" });
            }
            await project.update(req.body);
            res.json(project);
        } catch (error) {
            console.error("Erreur lors de la modification du projet :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Supprimer le projet
    deleteProject: async (req, res) => {
        const { id } = req.params;
        try {
            const project = await Projet.findByPk(id);
            if (!project) {
                return res.status(404).json({ message: "Aucun projet trouvé" });
            }
            await project.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Erreur lors de la suppression du projet :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    //Client

    // Faire une demande de projet
    askProject: async (req, res) => {
        const datas = req.body;
        try {
            const newProjet = await Projet.create(datas);
            res.json(newProjet);
        } catch (error) {
            console.error("Erreur lors de la création du projet:", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Voir la liste de ses projets
    listProjects: async (req, res) => {
        try {
            const projects = await Projet.findAll();
            if (projects.length > 0) {
                res.json(projects);
            } else {
                res.status(404).json({ message: "Aucun projet trouvé" });
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des projets :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Trier par statut
    sortByStatut: async(req, res) => {
        const { status } = req.query;
        if (!status) {
            return res.status(400).json({ message: "Paramètre de statut requis" });
        }
        try {
            const projects = await Projet.findAll({ where: { status } });
            if (projects.length > 0) {
                res.json(projects);
            } else {
                res.status(404).json({message: "Aucun projet trouvé avec ce statut",});
            }
        } catch (error) {
            console.error("Erreur lors du filtrage par statut :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },
};


export default projectsController;