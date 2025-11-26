import express from 'express';
import projectsController from '../controllers/projectsController.js';
import authenticate from "../middlewares/authMiddleware.js";
import adminAuthenticate from "../middlewares/adminMiddleware.js"


const projectRouter =  express.Router();

//ADMIN :

// Voir toute la liste des projets
// GET /api/admin/project
projectRouter.get('/admin/project', authenticate, adminAuthenticate,projectsController.getAllProjects)


// Trier les projets par statuts
// GET /api/admin/project/filter?
projectRouter.get('/admin/project/filter', authenticate, adminAuthenticate,projectsController.sortProjectsByStatus)

//Modifier le statut
// PATCH /api/admin/project/:idProjet
projectRouter.patch('/admin/project/:id', authenticate, adminAuthenticate,projectsController.updateStatus)

// Supprimer le projet
// DELETE /api/admin/project/:idProjet
projectRouter.delete('/admin/project/:id', authenticate, adminAuthenticate,projectsController.deleteProject)


//CLIENT : 

// Faire une demande de projet
// POST /api/project
projectRouter.post('/project', authenticate, projectsController.askProject)


// Voir la liste de ses projets
// GET /api/project
projectRouter.get('/project',authenticate,projectsController.listProjects)

// Trier les projects par statut
// GET /api/project/filter?
projectRouter.get('/project/filter', authenticate,projectsController.sortByStatut)



export default projectRouter;