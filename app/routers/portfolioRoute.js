import express from 'express';
import portfolioController from '../controllers/portfolioController.js';

const portfolioRoute = express.Router();

// GET /api/portfolio → Récupérer tous les projets
portfolioRoute.get('/portfolio', portfolioController.findAll);

// GET /api/portfolio/:id → Récupérer un projet par ID
portfolioRoute.get('/portfolio/:id', portfolioController.findById);

// POST /api/portfolio → Créer un nouveau projet
portfolioRoute.post('/portfolio', portfolioController.create);

// PATCH /api/portfolio/:id → Mettre à jour un projet
portfolioRoute.patch('/portfolio/:id', portfolioController.update);

// DELETE /api/portfolio/:id → Supprimer un projet
portfolioRoute.delete('/portfolio/:id', portfolioController.remove);

export default portfolioRoute;
