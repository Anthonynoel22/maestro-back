import { User, Projet, Company, Preview, Genre } from "../models/index.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const userController = {
    // Créer un nouvel utilisateur
    create: async (req, res) => {
        console.log(req.body);
        try {
            const userDatas = req.body;
            const { lastname, firstname, phonenumber, email, password } =
                userDatas;

            const passwordHashed = await bcrypt.hash(password, 10);
            console.log(userDatas);
            console.log(passwordHashed);

            await User.create({
                lastname,
                firstname,
                phonenumber,
                email,
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

            const user = await User.findOne({ where: { email } });
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

            const token = jwt.sign(
                { userId: user.id, role: user.role },
                JWT_SECRET,
                { expiresIn: "1h" }
            );

            res.json({
                token: token,
                role: user.role,
            });
        } catch (error) {
            console.error("Erreur lors de l'authentification: ", error);
            res.status(401).json({ error: "Unauthorized" });
        }
    },

    // Modifier les informations de l'utilisateur
    modify: async (req, res) => {
        console.log(req.body);

        try {
            const user = await User.findByPk(req.user.id);
            if (!user)
                return res
                    .status(404)
                    .json({ message: "Utilisateur introuvable" });

            const modifiedDatas = req.body;
            const { lastname, firstname, phonenumber, email, password } =
                modifiedDatas;

            const passwordHashed = await bcrypt.hash(password, 10);

            await user.update({
                lastname,
                firstname,
                phonenumber,
                email,
                password: passwordHashed,
            });
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

    // Supprimer un utilisateur (désactiver)
    // DELETE/api/user/:idUser
    // userRoute.delete('/user/:idUser', userController.quelque chose)

    // Voir la liste des utilisateurs
    findAll: async (req, res) => {
        try {
            const users = await User.findAll();
            if (users.length > 0) {
                res.json(users);
            } else {
                res.status(404).json({ message: "Aucun utilisateur trouvé" });
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
            const user = await User.findByPk(req.params.idUser);
            if (user) {
                res.json(user());
            } else {
                return res.status(401).json({
                    status: 401,
                    message: "Aucun utilisateur trouvé",
                });
            }
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
            const { lastnameSelected, firstnameSelected } = req.query;
            if (lastnameSelected) {
                const usersSorted = await User.findAll({
                    order: [["lastname", "DESC"]],
                });
                res.json(usersSorted);
            }
            if (firstnameSelected) {
                const usersSorted = await User.findAll({
                    order: [["firstname", "DESC"]],
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
