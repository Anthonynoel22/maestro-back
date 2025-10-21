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
                    message: "L'email et/ou le mot de passe sont incorrectes",
                });
            }

            const isMatching = await bcrypt.compare(password, user.password);
            if (!isMatching) {
                return res.status(401).json({
                    status: 401,
                    message: "L'email et/ou le MOT DE PASSE sont incorrectes",
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
};

export default userController;
