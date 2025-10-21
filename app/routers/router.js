import express from 'express';
import companyRoute from './companyRoute.js';
import previewRoute from './previewRoute.js';
import genreRoute from './genreRouter.js';

const router = express.Router();


router.use('/api', companyRoute);
router.use('/api', previewRoute);
router.use('/api', genreRoute );

export default router;