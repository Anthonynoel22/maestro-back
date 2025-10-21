import express from 'express';
import companyRoute from './companyRoute.js';
import userRoute from './userRoute.js';
import messageContactRoute from './messageContactRoute.js';
import previewRoute from './previewRoute.js';
import genreRoute from './genreRouter.js';
import portfolioRoute from './portfolioRoute.js'; // <-- notre nouvelle route portfolio

const router = express.Router();

// Toutes les routes API
router.use('/api', companyRoute);
router.use('/api', userRoute);
router.use('/api', messageContactRoute);
router.use('/api', previewRoute);
router.use('/api', genreRoute);
router.use('/api', portfolioRoute); // <-- ajout du portfolio

export default router;
