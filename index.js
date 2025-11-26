import * as dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import sequelize from "./app/db/database.js";
import Description from "./app/models/descriptionModel.js";
import MessageContact from "./app/models/messageContactModel.js";
import { User, Projet, Company, Preview, Genre } from "./app/models/index.js";
import router from "./app/routers/router.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";

// Configuration de dotenv
dotenv.config(); // Permet d'accéder aux variables définies dans .env via process.env

// Initialisation d'Express
const app = express(); // Crée une application Express
const port = process.env.PORT || 3000; // Définit le port (priorité à la variable .env, sinon 3000)

// Permet de décoder le corps au format JSON de la requête HTTP
app.use(express.json());

app.use(cookieParser());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true, // Autorise lʼenvoi automatique des cookies
    })
);

app.use("/imagesUploads", express.static("imageUploads"));

app.use("/uploads", express.static("uploads"));

// SECURITE : middleware sert à limiter le nombre de requêtes qu’un client peut faire
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000, //  15 minutes
        max: 500, // nb maximum de requêtes
    })
);

app.use(router);

// Route racine
app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API Maestro !");
});

// Connexion à la base et lancement du serveur
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
