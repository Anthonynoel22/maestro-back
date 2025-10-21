import express from "express";
import userController from "../controllers/userController.js";

const userRoute = express.Router();

// S'inscrire (nouvel utilisateur)
// POST/api/user
userRoute.post("/user", userController.create);

// Se connecter
// POST/api/user/login
userRoute.post("/user/login", userController.login);

// Modifier ses informations
// PATCH/api/user/:idUser
// userRoute.patch('/user/:idUser', userController.quelque chose)

// Supprimer un utilisateur (désactiver)
// DELETE/api/user/:idUser
// userRoute.delete('/user/:idUser', userController.quelque chose)

// Voir la liste des utilisateurs
// GET/api/admin/user
// userRoute.get('/admin/user', userController.quelque chose)

// Voir un seul utilisateur
// GET/api/admin/user/:idUser
// userRoute.get('/admin/user/:idUser', userController.quelque chose)

// Filtrer les utilisateurs
// GET/api/admin/user/(filtre)
// userRoute.get('/admin/user/(filtre)', userController.quelque chose)

export default userRoute;
