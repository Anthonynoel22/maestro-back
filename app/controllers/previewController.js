import { User, Projet, Company, Preview, Genre } from "../models/index.js";
import { unlink } from 'node:fs/promises';

const previewController = {

    findAll: async (req, res) => {
        try {
            const previews = await Preview.findAll();
            if (previews.length > 0) {
                res.json(previews);
            } else {
                res.status(404).json({message : "Aucun extrait trouvé"});
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des extraits", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    },

    findByFilter: async (req, res) => {
        console.log('in findByFilter');
        console.log(req.query.genre);
        console.log(req.query.orderByDate);
        
        try {
            // if ...
            const { genre } = req.query;
            if (genre) {
                console.log('in genre');
                
                const previews = await Preview.findAll({
                    include: [{
                        model: Genre,
                        as: "listGenres",
                        where: {
                            label: genre
                        }
                    }],
                    order: [['date', 'DESC']]
                });
                res.json(previews);
            } else {
                console.log("dans le if");
                const previews = await Preview.findAll({
                    order: [['date', 'DESC']]
                })
                console.log("après la recherche");
                
                res.json(previews);
                console.log("après res.json");
                
            };

            
        } catch (error) {
            console.error("Erreur lors de la recherche des extraits filtrés : ", error);
            res.status(500).json({error: "Erreur interne du serveur"});
        }
    },

    addPreview: async (req, res) => {
        // dans ma variable link, je stock la destination et le filename définis dans uploadMiddleware
        const link = `${req.file.destination}${req.file.filename}`;
        // req.body correspondent aux champs de la requête
        req.body.link = link; // req.body.link correspond maintenant à ma variable link, créée au-dessus
        const datas = req.body;
        try {
            const newUpload = await Preview.create(datas); // je crée newUpload grâce à datas
            res.status(201).json(newUpload); // et ici on renvoie la réponse et son statut
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'extrait : ", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    updatePreview: async (req, res) => {
        const { id } = req.params;
        const datas = req.body;
        try {
            const preview = await Preview.findByPk(id);
            if (!preview) {
                return res.status(404).json({message: 'Extrait non trouvé'});
            }
            await preview.update(datas);
            res.json(preview);
        } catch (error) {
            console.error("Erreur lors de la modification de l'extrait :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    deletePreview: async (req, res) => {
        const id = req.params.id;
        try {
            const preview = await Preview.findByPk(id);
            if (!preview) {
                return res.status(404).json({message: 'Extrait non trouvé'});
            }
            // preview.link
            await unlink(preview.link);
            await preview.destroy();
            res.status(200).json({message: 'Extrait supprimé'});
        } catch (error) {
            console.error("Erreur lors de la suppression de l'extrait : ", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    }


}


export default previewController;