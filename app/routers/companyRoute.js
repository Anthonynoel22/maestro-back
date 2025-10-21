import express from 'express';
import companyController from '../controllers/companyController.js';

const companyRoute = express.Router();

// GET /api/admin/company
companyRoute.get('/admin/company', companyController.findAll)

// POST /api/company
companyRoute.post('/company', companyController.create)

// PATCH /api/company/:idCompany
companyRoute.patch('/company/:id', companyController.update)

// DELETE /api/company/:idCompany
companyRoute.delete('/company/:id', companyController.delete)

export default companyRoute;