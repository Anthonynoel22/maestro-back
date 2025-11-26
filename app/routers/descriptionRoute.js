import express from 'express';
import descriptionController from '../controllers/descriptionController.js';
import { imageUpload } from '../middlewares/imageMiddleware.js';
import authenticate from "../middlewares/authMiddleware.js";
import adminAuthenticate from "../middlewares/adminMiddleware.js"


const descriptionRoute = express.Router();

// GET /api/description
descriptionRoute.get("/description", descriptionController.findAll);

// POST /api/admin/description
descriptionRoute.post('/admin/description', authenticate, adminAuthenticate, imageUpload.single('image'), descriptionController.create)

// PATCH /api/admin/description/:id
descriptionRoute.patch('/admin/description/:id', authenticate, adminAuthenticate, imageUpload.single('image'), descriptionController.update)

// DELETE /api/admin/description/:id
descriptionRoute.delete('/admin/description/:id', authenticate, adminAuthenticate, descriptionController.deleteDescription)

export default descriptionRoute;