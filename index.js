import * as dotenv from "dotenv";
import express from "express";
import sequelize from "./app/db/database.js";
import Preview from "./app/models/previewModel.js";
import Genre from "./app/models/genreModel.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base
async function main() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base réussie");
        sequelize.sync({ alter: true });

        app.listen(port, () => {
            console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
        });
    } catch (error) {
        console.error("❌ Erreur de connexion à la base :", error);
    }
}

// Lancement du serveur
// app.listen(port, () => {
//     console.log(`Serveur démarré sur http://localhost:${port}`);
// });

main();
