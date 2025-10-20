import * as dotenv from "dotenv";
import express from "express";
import sequelize from "./app/db/database.js";
import Description from "./app/models/descriptionModel.js";
import MessageContact from "./app/models/messageContactModel.js";
import { User, Projet, Company, Preview, Genre } from "./app/models/index.js";
import router from "./app/routers/router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// permet de décoder le corps au format JSON de la requête HTTP
app.use(express.json());

app.use(router);

// Connexion à la base
async function main() {
    try {
        await sequelize.authenticate();
        console.log("✅ Connexion à la base réussie");
        // sequelize.sync({ alter: true });

        app.listen(port, () => {
            console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
        });
    } catch (error) {
        console.error("❌ Erreur de connexion à la base :", error);
    }
}

main();
