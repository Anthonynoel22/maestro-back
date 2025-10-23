import express from 'express';
import descriptionController from '../controllers/descriptionController.js';

const descriptionRoute = express.Router();


// POST /api/admin/description
descriptionRoute.post('/admin/description', descriptionController.create)

// PATCH /api/admin/description/:id
descriptionRoute.patch('/admin/description/:id', descriptionController.update)

// DELETE /api/admin/description/:id
descriptionRoute.delete('/admin/description/:id', descriptionController.delete)

export default descriptionRoute;