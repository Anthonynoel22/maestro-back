import { User, Projet, Company, Preview, Genre, Description } from "../models/index.js";

const descriptionController = {

    // POST /api/admin/description
    create: async (req, res) => {
        try {
            const datas = req.body;
            console.log(datas);
            const newDescription = await Description.create(datas);
            res.status(201).json(newDescription);
        } catch (error) {
            console.error("Erreur lors de la création de la description :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // PATCH /api/admin/description/:id
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const datas = req.body;

            const description = await Description.findByPk(id);
            if (!description) {
                return res.status(404).json({ message: "Description non trouvée" });
            }
            await description.update(datas);
            res.json(description);
        } catch (error) {
            console.error("Erreur lors de la modification de la description :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // DELETE /api/admin/description/:id
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const description = await Description.findByPk(id);
            if (!description) {
                return res.status(404).json({ message: "Description non trouvée" });
            }

            await description.destroy();
            res.status(200).json({ message: "Description supprimée avec succès" });
        } catch (error) {
            console.error("Erreur lors de la suppression de la description :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    }
};

export default descriptionController;
