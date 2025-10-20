import express from 'express';
import companyRoute from './companyRoute.js';

const router = express.Router();


router.use('/api', companyRoute);

export default router;