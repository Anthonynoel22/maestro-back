import * as dotenv from "dotenv";
import express from "express";
import sequelize from "./app/db/database.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base
async function main() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base réussie");

        app.listen(port, () => {
            console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
        });
    } catch (error) {
        console.error("❌ Erreur de connexion à la base :", error);
    }
}

main();
