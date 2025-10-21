import express from 'express';
import previewController from '../controllers/previewController.js';


const previewRoute =  express.Router();

// GET /api/preview
previewRoute.get('/preview', previewController.findAll)


// GET /api/preview/filter?
previewRoute.get('/preview/filter?', previewController.findByFilter)

export default previewRoute;