import { User, Projet, Company, Preview, Genre } from "../models/index.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import sanitizeHtml from "sanitize-html";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const userController = {
    // Créer un nouvel utilisateur
    create: async (req, res) => {
        console.log(req.body);
        try {
            // récupération du mail & password par le front
            const { email, password } = req.body;

            // nettoyage de l'email avec SANITIZE
            const cleanEmail = sanitizeHtml(req.body.email);
            // TEST SECURITY console
            // console.log("Email avant :", req.body.email);
            // console.log("Email après :", cleanEmail);

            // HASH du mot de passe
            const passwordHashed = await bcrypt.hash(password, 10);

            await User.create({
                // données sécurisées
                email: cleanEmail,
                password: passwordHashed,
            });
            res.status(201).json({
                status: 201,
                message: "User successfully created",
            });
        } catch (error) {
            console.error(
                "Erreur lors de la création de l'utilisateur : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Connexion
    login: async (req, res) => {
        console.log(req.body);
        try {
            const loginDatas = req.body;
            const { email, password } = loginDatas;

            const user = await User.findOne({
                where: { email, isActive: true },
            });
            if (!user) {
                return res.status(401).json({
                    status: 401,
                    message: "L'email et/ou le mot de passe sont incorrects",
                });
            }

            const isMatching = await bcrypt.compare(password, user.password);
            if (!isMatching) {
                return res.status(401).json({
                    status: 401,
                    message: "L'email et/ou le mot de passe sont incorrects",
                });
            }

            const accessToken = jwt.sign(
                { id: user.id, role: user.role },
                JWT_SECRET,
                { expiresIn: "1h" }
            );

            // Création du refresh token (7 jours)
            const refreshToken = jwt.sign(
                { id: user.id, email: user.email },
                process.env.REFRESH_SECRET,
                { expiresIn: "7d" }
            );

            // Envoi du cookie access_token
            res.cookie("access_token", accessToken, {
                httpOnly: true, //  à true, il devient impossible d’y accéder depuis JS (front)
                secure: true, //  Mettre true en production avec HTTPS
                sameSite: "none", // Protège contre certaines attaques CSRF
                maxAge: 60 * 60 * 1000, // 1 heure en millisecondes
            });

            // Envoi du cookie refresh_token
            res.cookie("refresh_token", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
            });

            //  On renvoie les infos du user au frontend (sans mot de passe)
            res.json({
                message: "Connexion réussie",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role, // à vérifier
                },
            });
        } catch (error) {
            console.error("Erreur lors de l'authentification: ", error);
            res.status(401).json({ error: "Unauthorized" });
        }
    },

    refresh: async (req, res) => {
        const refreshToken = req.cookies.refresh_token;
        if (!refreshToken) {
            return res.status(401).json({ message: "Pas de refresh token" });
        }
        try {
            const decoded = jwt.verify(
                refreshToken,
                process.env.REFRESH_SECRET
            );
            const newAccessToken = jwt.sign(
                { id: decoded.id, email: decoded.email },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );
            // Réécriture du cookie access_token
            res.cookie("access_token", newAccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 60 * 60 * 1000,
            });
            res.json({ message: "Nouveau token généré" });
        } catch {
            res.status(403).json({
                message: "Refresh token invalide ou expiré",
            });
        }
    },

    // Se déconnecter
    logout: async (req, res) => {
        res.clearCookie("access_token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.clearCookie("refresh_token", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        res.json({ message: "Déconnexion effectuée" });
    },

    profile: async (req, res) => {
        try {
            //  Récupère l'utilisateur depuis la DB via son id dans le token
            const user = await User.findByPk(req.user.id);
            if (!user) {
                return res
                    .status(400)
                    .json({ message: "Utilisateur introuvable" });
            }
            return res.json({
                message: "Profil récupéré",
                user: user,
            });
        } catch (error) {
            console.error(
                "Erreur lors de la recupération des informations de l'utilisateur : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Modifier les informations de l'utilisateur
    modify: async (req, res) => {
        console.log(req.body);

        try {
            const user = await User.findByPk(req.user.id);
            if (!user) {
                return res
                    .status(400)
                    .json({ message: "Utilisateur introuvable" });
            }

            const modifiedDatas = req.body;
            // const { lastname, firstname, phonenumber, email } = modifiedDatas;

            await user.update(modifiedDatas);
            res.status(200).json({
                status: 200,
                message: "Information successfully modified",
            });
        } catch (error) {
            console.error(
                "Erreur lors de la modification des informations de l'utilisateur : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Désactiver un utilisateur
    disable: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res
                    .status(400)
                    .json({ message: "Utilisateur introuvable" });
            }

            const modifieIsActive = req.body;
            console.log("req.body : ", req.body);
            const { isActive } = modifieIsActive;

            await user.update({
                isActive,
            });
            res.status(200).json({
                status: 200,
                message: "Status du compte modifié avec succes",
            });
        } catch (error) {
            console.error(
                "Erreur lors de la modification status du compte : ",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Voir la liste des utilisateurs
    findAll: async (req, res) => {
        try {
            const users = await User.findAll({
                where: {
                    isActive: true,
                },

                include: [
                    {
                        model: Company,
                        as: "company",
                    },
                ],
            });
            if (users.length > 0) {
                res.json(users);
            } else {
                res.status(400).json({ message: "Aucun utilisateur trouvé" });
            }
        } catch (error) {
            console.error(
                "Erreur lors de la recherche des utilisateurs",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Voir un seul utilisateur
    findByPk: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res
                    .status(400)
                    .json({ message: "Utilisateur introuvable" });
            }
            console.log(user);
            return res.json({
                message: "Profil récupéré",
                user: user,
            });
        } catch (error) {
            console.error(
                "Erreur lors de la recherche d'un utilisateur",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },

    // Trier les utilisateurs
    sort: async (req, res) => {
        try {
            const { by } = req.query;
            if (by == "lastnameSelected") {
                const usersSorted = await User.findAll({
                    where: {
                        isActive: true,
                    },
                    include: [
                        {
                            model: Company,
                            as: "company",
                        },
                    ],
                    order: [["lastname", "ASC"]],
                });
                res.json(usersSorted);
            }
            if (by == "firstnameSelected") {
                const usersSorted = await User.findAll({
                    include: [
                        {
                            model: Company,
                            as: "company",
                        },
                    ],
                    order: [["firstname", "ASC"]],
                });
                res.json(usersSorted);
            }
        } catch (error) {
            console.error(
                "Erreur lors de la recherche des utilisateurs",
                error
            );
            res.status(500).json({ error: "Erreur interne du serveur" });
        }
    },
};

export default userController;
