import express from "express";
import previewController from "../controllers/previewController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const previewRoute = express.Router();

// GET /api/preview
previewRoute.get("/preview", previewController.findAll);

// GET /api/preview/filter?
previewRoute.get("/preview/filter", previewController.findByFilter);

// GET /api/preview pour les preview isStar pour la page d'accueil


// POST /api/admin/preview
previewRoute.post('/admin/preview', upload.single('preview'), previewController.addPreview);
// upload.single() me permet d'accepter l'upload d'un fichier (un seul à la fois)
// upload.single('preview') me permet d'aller chercher le fichier déposé dans l'input type='file' dont le name vaut 'preview'

// PATCH /api/admin/preview + /:id à ajouter ?


// DELETE /api/admin/preview + /:id à ajouter ?



export default previewRoute;
