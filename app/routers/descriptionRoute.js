import express from 'express';
import descriptionController from '../controllers/descriptionController.js';
import { imageUpload } from '../middlewares/imageMiddleware.js';

const descriptionRoute = express.Router();

// GET /api/description
descriptionRoute.get("/description", descriptionController.findAll);

// POST /api/admin/description
descriptionRoute.post('/admin/description', imageUpload.single('image'), descriptionController.create)

// PATCH /api/admin/description/:id
descriptionRoute.patch('/admin/description/:id', imageUpload.single('image'), descriptionController.update)

// DELETE /api/admin/description/:id
descriptionRoute.delete('/admin/description/:id', descriptionController.deleteDescription)

export default descriptionRoute;