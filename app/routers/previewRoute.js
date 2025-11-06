import express from "express";
import previewController from "../controllers/previewController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const previewRoute = express.Router();

// GET /api/preview
previewRoute.get("/preview", previewController.findAll);

// GET /api/preview/filter?
previewRoute.get("/preview/filter", previewController.findByFilter);

// GET /api/preview pour les preview isStar pour la page d'accueil
previewRoute.get("/preview/star", previewController.findStar);

// POST /api/admin/preview
previewRoute.post('/admin/preview', upload.single('previewFile'), previewController.addPreview);
// upload.single() me permet d'accepter l'upload d'un fichier (un seul à la fois)
// upload.single('previewFile') me permet d'aller chercher le fichier déposé dans l'input type='file' dont le name vaut 'previewFile'

// ajout d'un findbypk
// GET /api/preview/:id
previewRoute.get('/preview/:id', previewController.findById);

// PATCH /api/admin/preview + /:id à ajouter ?
previewRoute.patch('/admin/preview/:id', previewController.updatePreview);

// DELETE /api/admin/preview + /:id à ajouter ?
previewRoute.delete('/admin/preview/:id', previewController.deletePreview);


export default previewRoute;
