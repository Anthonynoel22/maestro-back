import {
    User,
    Projet,
    Company,
    Preview,
    Genre,
    MessageContact,
} from "../models/index.js";

const messageContact = {
    // GET /api/message-contact
    findAll: async (req, res) => {
        try {
            // je vais dans la table MessageContact et je te demande de me renvoyer toutes les MessageContact
            const message = await MessageContact.findAll();
            if (message.length > 0) {
                res.json(message);
            } else {
                res.status(404).json({ message: "Aucune message trouvé" });
            }
        } catch (error) {
            console.error("Erreur lors de la recherche des messages", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

        // POST /api/message-contact/
        create: async (req, res) => {
            console.log(req.body);
            
            try {
                const datas = req.body;
                console.log(datas);
                const newMessageContact = await MessageContact.create(datas);
                console.log(req.body);
                res.status(201).json(newMessageContact);
            } catch (error) {
                console.error("Erreur lors de la création d'un message' : ", error);
                res.status(500).json({error: "Erreur interne du serveur"});
            }
        },

    // PATCH /api/message-contact/:idMessageContact
    update: async (req, res) => {
        try {
            const { id } = req.params; // je récupère l'ID dans l'url
            const updatedata = req.body; // je récupère les données à modifier

            const message = await MessageContact.findByPk(id); // je cherche le message dans la BDD

            if (!message) {
                return res.status(404).json({ message: "Message non trouvé" });
            }
            await message.update(updatedata);

            res.json(message);
        } catch (error) {
            console.error("Erreur lors de la mise à jour du message :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Supprimer un message-contact
    // DELETE /api/genre/:idMessageContact
    deleteMessage: async (req, res) => {
        const { id } = req.params;
        try {
            const message = await MessageContact.findByPk(id);
            if (!message) {
                return res.status(404).json({ message: "Aucun message trouvé" });
            }
            await message.destroy();
            res.status(204).send();
        } catch (error) {
            console.error("Erreur lors de la suppression du message :", error);
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },
};


export default messageContact;
