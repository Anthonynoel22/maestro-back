import express from "express";
import userController from "../controllers/userController.js";
import authenticate from "../middlewares/authMiddleware.js";

const userRoute = express.Router();

// S'inscrire (nouvel utilisateur)
// POST/api/user
userRoute.post("/user", userController.create);

// Se connecter
// POST/api/user/login
userRoute.post("/user/login", userController.login);

// Rafraichir le token
// POST/api/user/refresh
userRoute.post("/user/refresh", userController.refresh);

// Se déconnecter
// POST/api/user/logout
userRoute.post("/user/logout", userController.logout);

// Voir ses informations personnelles
// GET/api/user/profile
userRoute.get("/user/profile", authenticate, userController.profile);

// Modifier ses informations
// PATCH/api/user
userRoute.patch("/user", authenticate, userController.modify);

// Supprimer un utilisateur (désactiver)
// DELETE/api/user
// userRoute.delete('/user', userController.quelque chose)

// Voir la liste des utilisateurs
// GET/api/admin/user
userRoute.get("/admin/user", userController.findAll);

// Trier les utilisateurs
// GET/api/admin/user/(filtre)
userRoute.get("/admin/user/filter", userController.sort);

// Voir un seul utilisateur
// GET/api/admin/user/:idUser
userRoute.get("/admin/user/:idUser", userController.findByPk);

export default userRoute;
