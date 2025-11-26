import express from 'express';
import genresController from '../controllers/genresController.js';
import authenticate from "../middlewares/authMiddleware.js";
import adminAuthenticate from "../middlewares/adminMiddleware.js"

const genreRoute = express.Router();

// GET /api/genre à la place de /api/admin/genre
genreRoute.get('/genre', genresController.getAllGenres)

// POST /api/admin/genre
genreRoute.post('/admin/genre', authenticate, adminAuthenticate, genresController.addAGenre)

// PATCH /api/genre/:idCompany
genreRoute.patch('/admin/genre/:id', authenticate, adminAuthenticate, genresController.updateGenre)

// DELETE /api/genre/:idCompany
genreRoute.delete('/admin/genre/:id', authenticate, adminAuthenticate, genresController.deleteGenre)


export default genreRoute;